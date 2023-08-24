import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="appHeader">
            <div className="headerTop">
                <div className="headerLogo">
                    <a href="/">ROBIN LAVOLL</a>
                </div>
                <div className="headerRight">
                    <div>
                        Hjem
                    </div>
                    <div>
                        Om
                    </div>
                </div>
            </div>

            <hr />
        </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
