# Paper Trading App

A simple full-stack paper trading app with a Node/TypeScript backend (Express + WebSocket) and a Vite React frontend.

## Quickstart

1. Start the backend:

```bash
cd server
npm install
npm run dev
```

Backend runs at `http://localhost:4000` with WebSocket at `ws://localhost:4000/ws`.

2. Start the frontend in a new terminal:

```bash
cd web
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Features

- Mock market data with random-walk quotes
- REST API: symbols, quote, portfolio, orders
- WebSocket: live quotes stream with symbol subscription
- Simple portfolio accounting and JSON persistence
- React UI: quotes table, order ticket, portfolio panel

## Configuration

- Frontend `.env`: set `VITE_API_BASE` (defaults to `http://localhost:4000`).
- Server port: `PORT` env var (defaults to 4000).

## API

- GET `/api/symbols`
- GET `/api/quote/:symbol`
- GET `/api/portfolio`
- POST `/api/orders` body:
```json
{ "side": "BUY|SELL", "symbol": "AAPL", "quantity": 10, "type": "MARKET|LIMIT", "price": 150 }
```

## WebSocket

- Path: `/ws`
- Subscribe message: `{ "type": "subscribe", "symbols": ["AAPL", "MSFT"] }`
- Quotes message: `{ "type": "quotes", "quotes": [ ... ] }`

## Scripts

- Server: `npm run dev` (dev), `npm run build && npm start` (prod)
- Web: `npm run dev` (dev), `npm run build` (prod)
