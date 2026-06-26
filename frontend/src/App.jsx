import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Members from './pages/Members'

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>💰 Motshelo</h1>
        <p>Manage your Motshelo group loans, contributions and dividends</p>
        <nav>
          <Link to="/members">Members</Link> |{' '}
          <Link to="/loans">Loans</Link> |{' '}
          <Link to="/contributions">Contributions</Link> |{' '}
          <Link to="/penalties">Penalties</Link> |{' '}
          <Link to="/dividends">Dividends</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
