import { useState, useEffect } from 'react'

function Penalties() {
  const [penalties, setPenalties] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/penalties`)
      .then(res => res.json())
      .then(data => setPenalties(data))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>⚠️ Penalties</h1>
      {penalties.length === 0 ? (
        <p>No penalties yet</p>
      ) : (
        penalties.map(p => (
          <div key={p.id}>
            <p>Month: {p.month} — Amount: P{p.amount}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Penalties
