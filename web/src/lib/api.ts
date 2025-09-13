import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export const api = axios.create({
	baseURL: `${API_BASE}/api`,
});

export type Quote = {
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

export async function fetchSymbols(): Promise<string[]> {
	const res = await api.get<string[]>('/symbols');
	return res.data;
}

export async function fetchQuote(symbol: string): Promise<Quote> {
	const res = await api.get<Quote>(`/quote/${symbol}`);
	return res.data;
}

export type OrderInput = {
	side: 'BUY' | 'SELL';
	symbol: string;
	quantity: number;
	type?: 'MARKET' | 'LIMIT';
	price?: number;
};

export async function placeOrder(order: OrderInput) {
	const res = await api.post('/orders', order);
	return res.data;
}

export async function fetchPortfolio() {
	const res = await api.get('/portfolio');
	return res.data;
}

export function createQuotesSocket(path: string = '/ws'): WebSocket {
	const url = new URL(path, API_BASE.replace(/^http/, 'ws')).toString();
	return new WebSocket(url);
}