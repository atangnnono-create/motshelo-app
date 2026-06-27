import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Members from './pages/Members'
import Loans from './pages/Loans'
import Contributions from './pages/Contributions'
import Penalties from './pages/Penalties'
import Dividends from './pages/Dividends'

function Dashboard() {
  return (
    <div>
      <h2>📊 Overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
        <div style={{ background: '#f0f4ff', padding: '16px', borderRadius: '8px' }}>
          <h3>👥 Members</h3>
          <Link to="/members">Manage →</Link>
        </div>
        <div style={{ background: '#f0fff4', padding: '16px', borderRadius: '8px' }}>
          <h3>💳 Loans</h3>
          <Link to="/loans">Manage →</Link>
        </div>
        <div style={{ background: '#fffbf0', padding: '16px', borderRadius: '8px' }}>
          <h3>💵 Contributions</h3>
          <Link to="/contributions">Manage →</Link>
        </div>
        <div style={{ background: '#fff0f0', padding: '16px', borderRadius: '8px' }}>
          <h3>⚠️ Penalties</h3>
          <Link to="/penalties">Manage →</Link>
        </div>
        <div style={{ background: '#f5f0ff', padding: '16px', borderRadius: '8px', gridColumn: 'span 2' }}>
          <h3>🎁 Dividends</h3>
          <Link to="/dividends">Manage →</Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>💰 Motshelo</h1>
        <p>Manage your Motshelo group loans, contributions and dividends</p>
        <nav>
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
