import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='rectangle5'>
    </div>
    <div className='rectangle26'>
    </div>
    <img src="./src/images/banner-hero.jpg"/>
    <text className='werehere'>
      we're here to help
    </text>
    <text className='bigtext'>
      When it comes to caring for our most intimate areas, we’ve lost our connection.
      Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting 
      the parts of our bodies that need it most. We’re here to help. Providing you with the 
      expertise, knowledge and products you need to feel confident in your personal care.
    </text>
    </>
  )

  /*
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
      <text>
        "Hello World!"
      </text>
    </>
  )
  */
}

export default App
