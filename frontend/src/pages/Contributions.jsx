import { useState, useEffect } from 'react'

function Contributions() {
  const [contributions, setContributions] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/contributions`)
      .then(res => res.json())
      .then(data => setContributions(data))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>💰 Contributions</h1>
      {contributions.length === 0 ? (
        <p>No contributions yet</p>
      ) : (
        contributions.map(c => (
          <div key={c.id}>
            <p>Month: {c.month} — Amount: P{c.amount_paid}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Contributions
