import { marketData } from './marketData';
import fs from 'fs';
import path from 'path';

export type Position = {
	symbol: string;
	quantity: number;
	avgPrice: number;
};

export type CashAccount = {
	currency: string;
	cash: number;
};

export type Order = {
	id: string;
	side: 'BUY' | 'SELL';
	symbol: string;
	quantity: number;
	price?: number;
	type: 'MARKET' | 'LIMIT';
};

export type ExecutionReport = {
	orderId: string;
	status: 'FILLED' | 'REJECTED' | 'PARTIAL' | 'PENDING';
	filledQuantity: number;
	avgFillPrice?: number;
	rejectReason?: string;
	position?: Position;
	cashAccount?: CashAccount;
};

const DATA_DIR = path.resolve(process.cwd(), 'data');
const PORTFOLIO_FILE = path.join(DATA_DIR, 'portfolio.json');

class PortfolioStore {
	private positions: Map<string, Position> = new Map();
	private cashAccount: CashAccount = { currency: 'USD', cash: 100000 };

	constructor() {
		this.load();
	}

	private load() {
		try {
			if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
			if (fs.existsSync(PORTFOLIO_FILE)) {
				const raw = fs.readFileSync(PORTFOLIO_FILE, 'utf-8');
				const parsed = JSON.parse(raw);
				this.cashAccount = parsed.cashAccount ?? this.cashAccount;
				this.positions = new Map<string, Position>((parsed.positions ?? []).map((p: Position) => [p.symbol, p]));
			}
		} catch (e) {
			// ignore corrupted file
		}
	}

	private persist() {
		try {
			const snapshot = {
				cashAccount: this.cashAccount,
				positions: Array.from(this.positions.values()),
			};
			fs.writeFileSync(PORTFOLIO_FILE, JSON.stringify(snapshot, null, 2));
		} catch {}
	}

	public getSnapshot() {
		return {
			cash: this.cashAccount,
			positions: Array.from(this.positions.values()),
		};
	}

	public executeOrder(order: Order): ExecutionReport {
		const quote = marketData.getQuote(order.symbol);
		if (!quote) {
			return { orderId: order.id, status: 'REJECTED', filledQuantity: 0, rejectReason: 'Unknown symbol' };
		}

		let fillPrice = quote.price;
		if (order.type === 'LIMIT') {
			if (order.side === 'BUY' && order.price !== undefined && order.price < fillPrice) {
				return { orderId: order.id, status: 'PENDING', filledQuantity: 0 };
			}
			if (order.side === 'SELL' && order.price !== undefined && order.price > fillPrice) {
				return { orderId: order.id, status: 'PENDING', filledQuantity: 0 };
			}
			fillPrice = order.price ?? fillPrice;
		}

		const notional = fillPrice * order.quantity;
		if (order.side === 'BUY') {
			if (this.cashAccount.cash < notional) {
				return { orderId: order.id, status: 'REJECTED', filledQuantity: 0, rejectReason: 'Insufficient funds' };
			}
			this.cashAccount.cash -= notional;
			const existing = this.positions.get(order.symbol) ?? { symbol: order.symbol, quantity: 0, avgPrice: 0 };
			const newQuantity = existing.quantity + order.quantity;
			const newAvgPrice = (existing.avgPrice * existing.quantity + notional) / newQuantity;
			this.positions.set(order.symbol, { symbol: order.symbol, quantity: newQuantity, avgPrice: newAvgPrice });
		} else {
			const existing = this.positions.get(order.symbol);
			if (!existing || existing.quantity < order.quantity) {
				return { orderId: order.id, status: 'REJECTED', filledQuantity: 0, rejectReason: 'Insufficient shares' };
			}
			existing.quantity -= order.quantity;
			this.cashAccount.cash += notional;
			if (existing.quantity === 0) {
				this.positions.delete(order.symbol);
			} else {
				this.positions.set(order.symbol, existing);
			}
		}

		const position = this.positions.get(order.symbol) ?? { symbol: order.symbol, quantity: 0, avgPrice: 0 };
		const report: ExecutionReport = {
			orderId: order.id,
			status: 'FILLED',
			filledQuantity: order.quantity,
			avgFillPrice: fillPrice,
			position,
			cashAccount: this.cashAccount,
		};
		this.persist();
		return report;
	}
}

export const portfolioStore = new PortfolioStore();