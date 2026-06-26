import { useState, useEffect } from 'react'

function Loans() {
  const [loans, setLoans] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/loans`)
      .then(res => res.json())
      .then(data => setLoans(data))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>💳 Loans</h1>
      {loans.length === 0 ? (
        <p>No loans yet</p>
      ) : (
        loans.map(l => (
          <div key={l.id}>
            <p>Amount: P{l.amount} — Status: {l.status}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Loans
