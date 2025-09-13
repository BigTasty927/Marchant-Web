type Quote = {
	symbol: string;
	price: number;
	open: number;
	high: number;
	low: number;
	prevClose: number;
	change: number;
	changePercent: number;
	timestamp: number;
};

const INITIAL_SYMBOLS = [
	'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA',
	'NVDA', 'META', 'NFLX', 'AMD', 'INTC',
	'IBM', 'ORCL', 'ADBE', 'AVGO', 'CRM'
];

class MarketDataService {
	private symbolToQuote: Map<string, Quote> = new Map();
	private intervalId?: NodeJS.Timeout;

	constructor() {
		const now = Date.now();
		for (const symbol of INITIAL_SYMBOLS) {
			const base = 50 + Math.random() * 300;
			const quote: Quote = {
				symbol,
				price: base,
				open: base,
				high: base,
				low: base,
				prevClose: base * (0.99 + Math.random() * 0.02),
				change: 0,
				changePercent: 0,
				timestamp: now,
			};
			this.symbolToQuote.set(symbol, quote);
		}
		this.start();
	}

	public start(): void {
		if (this.intervalId) return;
		this.intervalId = setInterval(() => this.tick(), 1000);
	}

	public stop(): void {
		if (this.intervalId) clearInterval(this.intervalId);
		this.intervalId = undefined;
	}

	private tick(): void {
		const now = Date.now();
		for (const [symbol, quote] of this.symbolToQuote) {
			const drift = (Math.random() - 0.5) * Math.max(0.01, quote.price * 0.002);
			const next = Math.max(0.01, quote.price + drift);
			quote.price = next;
			quote.high = Math.max(quote.high, next);
			quote.low = Math.min(quote.low, next);
			quote.change = next - quote.prevClose;
			quote.changePercent = (quote.change / quote.prevClose) * 100;
			quote.timestamp = now;
			this.symbolToQuote.set(symbol, quote);
		}
	}

	public getSymbols(): string[] {
		return Array.from(this.symbolToQuote.keys());
	}

	public getQuote(symbol: string): Quote | undefined {
		return this.symbolToQuote.get(symbol);
	}
}

export const marketData = new MarketDataService();
export type { Quote };