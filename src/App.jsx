import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import SKULL from './assets/SKULL.png'
//import viteLogo from '/vite.svg'
import swag_pants from '/swag_pants.jpg'
import './App.css'
import Profile from './components/Profile/Profile'
import Video from './components/Video/Video'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)
  const size = 100
  // let src = put the amazon video link here
  let src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4"


  return (
    <>
      <div>
      <Video src={src}/>
      <Profile size={size}/>
        count is {count}
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
