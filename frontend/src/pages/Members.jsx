import { useState, useEffect } from 'react'

function Members() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/members`)
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>👥 Members</h1>
      {members.length === 0 ? (
        <p>No members yet</p>
      ) : (
        members.map(m => (
          <div key={m.id}>
            <p>{m.name} — {m.phone}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Members
