import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Members from './pages/Members'
import Loans from './pages/Loans'
import Contributions from './pages/Contributions'
import Penalties from './pages/Penalties'
import Dividends from './pages/Dividends'

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
