import { useEffect, useState } from 'react';
import type { OrderInput } from '../lib/api';
import { fetchSymbols, placeOrder } from '../lib/api';

export function OrderTicket({ onPlaced }: { onPlaced: () => void }) {
  const [symbols, setSymbols] = useState<string[]>([]);
  const [form, setForm] = useState<OrderInput>({ side: 'BUY', symbol: '', quantity: 1, type: 'MARKET' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSymbols().then(setSymbols).catch(() => setSymbols([]));
  }, []);

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      await placeOrder(form);
      onPlaced();
    } catch (e: any) {
      setError(e?.response?.data?.error || 'Failed to place order');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="panel">
      <h2>Order Ticket</h2>
      <div className="controls">
        <select value={form.side} onChange={(e) => setForm({ ...form, side: e.target.value as 'BUY' | 'SELL' })}>
          <option value="BUY">Buy</option>
          <option value="SELL">Sell</option>
        </select>
        <select value={form.symbol} onChange={(e) => setForm({ ...form, symbol: e.target.value })}>
          <option value="">Select symbol…</option>
          {symbols.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <input type="number" min={1} value={form.quantity}
               onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })} />
        <select value={form.type || 'MARKET'} onChange={(e) => setForm({ ...form, type: e.target.value as any })}>
          <option value="MARKET">Market</option>
          <option value="LIMIT">Limit</option>
        </select>
        {form.type === 'LIMIT' && (
          <input type="number" step="0.01" placeholder="Limit price" value={form.price || ''}
                 onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} />
        )}
        <button disabled={submitting || !form.symbol || form.quantity <= 0} onClick={submit}>
          {submitting ? 'Submitting…' : 'Submit'}
        </button>
      </div>
      {error && <div style={{ color: '#dc2626' }}>{error}</div>}
    </div>
  );
}