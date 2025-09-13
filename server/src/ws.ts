import { WebSocketServer, WebSocket } from 'ws';
import { createServer, Server as HttpServer } from 'http';
import { marketData } from './services/marketData';

export function attachWebSocketServer(httpServer: HttpServer) {
	const wss = new WebSocketServer({ server: httpServer, path: '/ws' });

	type ClientState = { symbols: Set<string> };
	const clientState = new WeakMap<WebSocket, ClientState>();

	wss.on('connection', (ws: WebSocket) => {
		clientState.set(ws, { symbols: new Set() });

		ws.on('message', (message: Buffer) => {
			try {
				const payload = JSON.parse(message.toString());
				if (payload.type === 'subscribe' && Array.isArray(payload.symbols)) {
					const state = clientState.get(ws);
					if (!state) return;
					state.symbols = new Set(payload.symbols.map((s: string) => s.toUpperCase()));
					ws.send(JSON.stringify({ type: 'subscribed', symbols: Array.from(state.symbols) }));
				}
			} catch (err) {
				// ignore
			}
		});
	});

	setInterval(() => {
		wss.clients.forEach((ws) => {
			const state = clientState.get(ws as WebSocket);
			if (!state) return;
			const symbols = state.symbols.size > 0 ? Array.from(state.symbols) : marketData.getSymbols().slice(0, 20);
			const quotes = symbols
				.map((s) => marketData.getQuote(s))
				.filter(Boolean);
			try {
				(ws as WebSocket).send(JSON.stringify({ type: 'quotes', quotes }));
			} catch {}
		});
	}, 1000);
}