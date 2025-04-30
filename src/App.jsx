import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import SKULL from './assets/SKULL.png'
//import viteLogo from '/vite.svg'
import swag_pants from '/swag_pants.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="C:\Users\akins\projects\react_ok\public\swag_pants.jpg" target="_blank">
          <img src={swag_pants} className="logo" alt="Vite logo" />
        </a>
        <a href="C:\Users\akins\projects\react_ok\src\assets\SKULL.png" target="_blank">
          <img src={SKULL} className="logo react" alt="React logo" />
        </a>
        <a href="C:\Users\akins\projects\react_ok\src\assets\SKULL.png" target="_blank">
          <img src={SKULL} className="logo react" alt="React logo" />
        </a>
        <a href="C:\Users\akins\projects\react_ok\src\assets\SKULL.png" target="_blank">
          <img src={SKULL} className="logo react" alt="React logo" />
        </a>
        <a href="C:\Users\akins\projects\react_ok\src\assets\SKULL.png" target="_blank">
          <img src={SKULL} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
