import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='rectangle5'>
        <img src="./src/images/Module1Header.jpg"/>
        <button>
        <img src="./src/images/icsearch.jpg"/>
        </button>
      </div>
      <div className='rectangle26'>
      </div>
      <img src="./src/images/banner-hero.jpg"/>
      <div>
        <text className='werehere'>
          we're here to help
        </text>
        <text className='bigtext1'>
          When it comes to caring for our most intimate areas, we’ve lost our connection.
          Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting 
          the parts of our bodies that need it most. We’re here to help. Providing you with the 
          expertise, knowledge and products you need to feel confident in your personal care.
        </text>
      </div>
      <img src="./src/images/icons.jpg"/>
      <div className='block2'>
        <text className='whatever'>
        whatever your age. whatever your lifestyle. whatever your interests.
        </text>
        <text className='bigtext2'>
        Co-created with gynaecologists, our revolutionary products have been expertly 
        developed to support your intimate microbiome and pH balance, and strengthen overall 
        natural health. As the experts in intimate hygiene, we want to bring discussion 
        about intimate wellness care out of the dark and demystify the taboos that surround it.
        </text>
      </div>
      <div className='block3'>
        <text className='ourproducts'>
          our products
        </text>
        <div className='card'>
          <img src="./src/images/image mask.jpg"/>
          <text className='cardtext'>
          intibiome wellness daily intimate wash
          </text>
          <div className='cardsmallblock' style={{backgroundColor: '#389CD6'}} >
            <text className='smallblocktext'>
              wellness
            </text>
          </div>
        </div>
        <div className='card'>
          <img src="./src/images/image mask1.jpg"/>
          <text className='cardtext'>
          intibiome active extra protection intimate wash
          </text>
          <div className='cardsmallblock' style={{backgroundColor: '#309D5F'}} >
            <text className='smallblocktext'>
              active
            </text>
          </div>
        </div>
        <div className='card'>
          <img src="./src/images/image mask2.jpg"/>
          <text className='cardtext'>
          intibiome agecare dryness relief intimate wash
          </text>
          <div className='cardsmallblock' style={{backgroundColor: '#EE6381'}} >
            <text className='smallblocktext'>
              agecare
            </text>
          </div>
        </div>
      </div>
      <img src="./src/images/Asset22.jpg"/>
      <div className='block4'>
        <text className='keepup'>
        keep up to date with our discoveries
        </text>
        <div className='card2'>
          <img src="./src/images/ScreenShot1.jpg"/>
          <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </text>
        </div>
        <div className='card2'>
          <img src="./src/images/ScreenShot2.jpg"/>
          <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </text>
        </div>
        <div className='card2'>
          <img src="./src/images/ScreenShot3.jpg"/>
          <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </text>
        </div>
        <button className='seemorebutton'>
          see more
        </button>
      </div>
      <div className='footer'>

      </div>
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
