import { useState, useEffect } from 'react'

function Dividends() {
  const [dividends, setDividends] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/dividends`)
      .then(res => res.json())
      .then(data => setDividends(data))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>📊 Dividends</h1>
      {dividends.length === 0 ? (
        <p>No dividends yet</p>
      ) : (
        dividends.map(d => (
          <div key={d.id}>
            <p>Period: {d.period} — Share: P{d.final_dividend}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Dividends
