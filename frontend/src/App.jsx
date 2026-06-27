import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Members from './pages/Members'
import Loans from './pages/Loans'
import Contributions from './pages/Contributions'
import Penalties from './pages/Penalties'
import Dividends from './pages/Dividends'

function Dashboard() {
  const [stats, setStats] = useState({
    members: 0, activeLoans: 0, totalLoanAmount: 0, totalContributions: 0, penalties: 0
  })

  const API = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(`${API}/members`).then(r => r.json()).then(d =>
      setStats(s => ({ ...s, members: d.length })))

    fetch(`${API}/loans`).then(r => r.json()).then(d =>
      setStats(s => ({
        ...s,
        activeLoans: d.filter(l => l.status === 'active').length,
        totalLoanAmount: d.reduce((sum, l) => sum + (l.amount || 0), 0)
      })))

    fetch(`${API}/contributions`).then(r => r.json()).then(d =>
      setStats(s => ({
        ...s,
        totalContributions: d.reduce((sum, c) => sum + (c.amount_paid || 0), 0)
      })))

    fetch(`${API}/penalties`).then(r => r.json()).then(d =>
      setStats(s => ({ ...s, penalties: d.length })))
  }, [])

  const cards = [
    { label: 'Members', icon: '👥', value: stats.members, sub: 'total members', to: '/members', bg: '#e8f0fe' },
    { label: 'Active Loans', icon: '💳', value: stats.activeLoans, sub: `P${stats.totalLoanAmount.toLocaleString()} total`, to: '/loans', bg: '#e6f4ea' },
    { label: 'Contributions', icon: '💵', value: `P${stats.totalContributions.toLocaleString()}`, sub: 'total collected', to: '/contributions', bg: '#fef9e7' },
    { label: 'Penalties', icon: '⚠️', value: stats.penalties, sub: 'outstanding', to: '/penalties', bg: '#fce8e6' },
  ]

  return (
    <div>
      <h2 style={{ marginBottom: '16px' }}>📊 Overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {cards.map(card => (
          <div key={card.label} style={{
            background: card.bg,
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '24px' }}>{card.icon}</div>
            <div style={{ fontSize: '22px', fontWeight: 'bold', margin: '4px 0' }}>{card.value}</div>
            <div style={{ fontSize: '13px', color: '#555' }}>{card.label}</div>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px' }}>{card.sub}</div>
            <Link to={card.to} style={{ fontSize: '13px' }}>Manage →</Link>
          </div>
        ))}
      </div>
      <div style={{
        background: '#f3e8ff',
        padding: '16px',
        borderRadius: '12px',
        marginTop: '12px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
      }}>
        <div style={{ fontSize: '24px' }}>🎁</div>
        <div style={{ fontSize: '18px', fontWeight: 'bold', margin: '4px 0' }}>Dividends</div>
        <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px' }}>end of year payouts</div>
        <Link to="/dividends" style={{ fontSize: '13px' }}>Manage →</Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '480px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '4px' }}>💰 Motshelo</h1>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>
          Maiteko Palapye 2026
        </p>
        <nav style={{ fontSize: '14px', marginBottom: '12px' }}>
          <Link to="/">Home</Link> |{' '}
          <Link to="/members">Members</Link> |{' '}
          <Link to="/loans">Loans</Link> |{' '}
          <Link to="/contributions">Contributions</Link> |{' '}
          <Link to="/penalties">Penalties</Link> |{' '}
          <Link to="/dividends">Dividends</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/penalties" element={<Penalties />} />
          <Route path="/dividends" element={<Dividends />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
