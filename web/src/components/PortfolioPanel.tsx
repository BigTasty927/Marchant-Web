import { useEffect, useState } from 'react';
import { fetchPortfolio } from '../lib/api';

export function PortfolioPanel({ refreshTrigger }: { refreshTrigger: number }) {
  const [data, setData] = useState<{ cash: { currency: string; cash: number }; positions: { symbol: string; quantity: number; avgPrice: number }[] } | null>(null);

  useEffect(() => {
    fetchPortfolio().then(setData).catch(() => setData(null));
  }, [refreshTrigger]);

  return (
    <div className="panel">
      <h2>Portfolio</h2>
      {data ? (
        <>
          <div style={{ marginBottom: '0.5rem' }}>Cash: {data.cash.currency} {data.cash.cash.toFixed(2)}</div>
          <table className="table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Qty</th>
                <th>Avg Price</th>
              </tr>
            </thead>
            <tbody>
            {data.positions.map((p) => (
              <tr key={p.symbol}>
                <td>{p.symbol}</td>
                <td>{p.quantity}</td>
                <td>{p.avgPrice.toFixed(2)}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      ) : (
        <div>Loading…</div>
      )}
    </div>
  );
}