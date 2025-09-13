import './App.css'
import { useState } from 'react'
import { QuotesTable } from './components/QuotesTable'
import { OrderTicket } from './components/OrderTicket'
import { PortfolioPanel } from './components/PortfolioPanel'

function App() {
  const [refreshCounter, setRefreshCounter] = useState(0)

  return (
    <>
      <h1>Paper Trading</h1>
      <div className="app-grid">
        <div>
          <QuotesTable />
        </div>
        <div>
          <OrderTicket onPlaced={() => setRefreshCounter((c) => c + 1)} />
          <PortfolioPanel refreshTrigger={refreshCounter} />
        </div>
      </div>
    </>
  )
}

export default App
