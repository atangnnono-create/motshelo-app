import { useState, useEffect } from 'react'

function Members() {
  const [members, setMembers] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [nationalId, setNationalId] = useState('')
  const [loading, setLoading] = useState(false)

  const API = import.meta.env.VITE_API_URL

  const fetchMembers = () => {
    fetch(`${API}/members`)
      .then(res => res.json())
      .then(data => setMembers(data))
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  const addMember = () => {
    if (!name || !phone) return alert('Name and phone are required!')
    setLoading(true)
    fetch(`${API}/members`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        national_id: nationalId
      })
    })
      .then(res => res.json())
      .then(() => {
        setName('')
        setPhone('')
        setNationalId('')
        setLoading(false)
        fetchMembers()
      })
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>👥 Members</h1>

      <div style={{ 
        background: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>Add New Member</h3>
        <input
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <input
          placeholder="National ID (Omang)"
          value={nationalId}
          onChange={e => setNationalId(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
        />
        <button
          onClick={addMember}
          disabled={loading}
          style={{ 
            background: '#2d6a4f', 
            color: 'white', 
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            width: '100%'
          }}
        >
          {loading ? 'Adding...' : 'Add Member'}
        </button>
      </div>

      <h3>Members ({members.length})</h3>
      {members.length === 0 ? (
        <p>No members yet</p>
      ) : (
        members.map(m => (
          <div key={m.id} style={{
            background: 'white',
            border: '1px solid #ddd',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '10px'
          }}>
            <strong>{m.name}</strong>
            <p style={{ margin: '5px 0' }}>📞 {m.phone}</p>
            <p style={{ margin: '5px 0' }}>🪪 {m.national_id}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Members
