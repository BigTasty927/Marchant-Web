import { useEffect, useMemo, useRef, useState } from 'react';
import type { Quote } from '../lib/api';
import { createQuotesSocket, fetchSymbols } from '../lib/api';

export function QuotesTable() {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [quotes, setQuotes] = useState<Record<string, Quote>>({});
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    fetchSymbols().then(setSymbols).catch(() => setSymbols([]));
  }, []);

  useEffect(() => {
    const ws = createQuotesSocket();
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: 'subscribe', symbols: selected }));
    };
    ws.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.type === 'quotes') {
          const next: Record<string, Quote> = { ...quotes };
          for (const q of payload.quotes as Quote[]) {
            next[q.symbol] = q;
          }
          setQuotes(next);
        }
      } catch {}
    };
    return () => ws.close();
  }, [selected]);

  const rows = useMemo(() => {
    const current = selected.length > 0 ? selected : symbols.slice(0, 10);
    return current.map((s) => quotes[s]).filter(Boolean) as Quote[];
  }, [selected, symbols, quotes]);

  const toggleSymbol = (symbol: string) => {
    setSelected((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      const next = selected.includes(symbol)
        ? selected.filter((s) => s !== symbol)
        : [...selected, symbol];
      wsRef.current.send(JSON.stringify({ type: 'subscribe', symbols: next }));
    }
  };

  return (
    <div className="panel">
      <h2>Quotes</h2>
      <div className="controls">
        <select onChange={(e) => toggleSymbol(e.target.value)}>
          <option value="">Add symbol…</option>
          {symbols.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {selected.map((s) => (
            <span key={s} className="chip">
              {s} <button onClick={() => toggleSymbol(s)}>x</button>
            </span>
          ))}
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change %</th>
            <th>High</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((q) => (
            <tr key={q.symbol} className={q.change >= 0 ? 'row-green' : 'row-red'}>
              <td>{q.symbol}</td>
              <td>{q.price.toFixed(2)}</td>
              <td>{q.change.toFixed(2)}</td>
              <td>{q.changePercent.toFixed(2)}%</td>
              <td>{q.high.toFixed(2)}</td>
              <td>{q.low.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}