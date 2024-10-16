import { useState } from 'react'
import './App.css'
import { Button } from '@forkingidiots/ui-larious'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <a href="#" target="_blank">
          <span className="logo react">🔥</span>
        </a>
      </div>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
