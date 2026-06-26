import { useState } from 'react'

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>💰 Motshelo</h1>
      <p>Manage your Motshelo group loans, contributions and dividends</p>
      <nav>
        <a href="/members">Members</a> |{' '}
        <a href="/loans">Loans</a> |{' '}
        <a href="/contributions">Contributions</a> |{' '}
        <a href="/penalties">Penalties</a> |{' '}
        <a href="/dividends">Dividends</a>
      </nav>
    </div>
  )
}

export default App
