import { useState, useEffect } from 'react'

function Loans() {
  const [loans, setLoans] = useState([])
  const [members, setMembers] = useState({})

  const API = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(`${API}/members`)
      .then(res => res.json())
      .then(data => {
        const map = {}
        data.forEach(m => { map[m.members_id] = m.name })
        setMembers(map)
      })

    fetch(`${API}/loans`)
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
          <div key={l.id} style={{
            background: 'white',
            border: '1px solid #ddd',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '10px'
          }}>
            <strong>{members[l.members_id] || 'Unknown'}</strong>
            <p style={{ margin: '4px 0' }}>💰 Amount: P{l.amount?.toLocaleString()}</p>
            <p style={{ margin: '4px 0' }}>📈 Interest: {l.interest_rate}%</p>
            <p style={{ margin: '4px 0' }}>📅 Issued: {l.issue_date}</p>
            <p style={{ margin: '4px 0' }}>
              Status: <span style={{
                color: l.status === 'active' ? 'green' : 'gray',
                fontWeight: 'bold'
              }}>{l.status}</span>
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default Loans
