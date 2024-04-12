import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='rectangle5'>
        <img src="./src/images/Module1Header.jpg" className='imgheader'/>
        <button className='buttonheader'>
          <img src="./src/images/icsearch.jpg" className='icsearch'/>
        </button>
      </div>
      <div className='rectangle26'>
        <button className='bluebuttons1' style={{marginLeft: '24%'}}>
          about us ↓
        </button>
        <button className='bluebuttons2'>
          our products ↓
        </button>
        <button className='bluebuttons3'>
          intimate health ↓
        </button>
        <button className='simplebluebutton'>
          contact us
        </button>
      <div className='rectangle26extra1'>
        <button className='graybuttons' style={{marginLeft: '21%'}}>
          brand philosophy
        </button>
        <button className='graybuttons'>
          product technology
        </button>
      </div>
      <div className='rectangle26extra2'>
        <button className='graybuttons' style={{marginLeft: '21%'}}>
          all products
        </button>
        <button className='graybuttons'>
          intibiome wellness
        </button>
        <button className='graybuttons'>
          intibiome active
        </button>
        <button className='graybuttons'>
          intibiome agecare
        </button>
      </div>
      <div className='rectangle26extra3'>
        <button className='graybuttons' style={{marginLeft: '21%'}}>
          article 1
        </button>
        <button className='graybuttons'>
          article 2
        </button>
        <button className='graybuttons'>
          article 3
        </button>
        <button className='graybuttons'>
          faq
        </button>
      </div>
      </div>
      <img src="./src/images/banner-hero.jpg" className='banner-hero'/>
      <div className='block1'>
        <text className='werehere'>
          we're here to help
        </text>
        <text className='bigtext1'>
          When it comes to caring for our most intimate areas, we’ve lost our connection.<br/><br/>
          Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting 
          the parts of our bodies that need it most.<br/><br/> We’re here to help. Providing you with the 
          expertise, knowledge and products you need to feel confident in your personal care.
        </text>
      </div>
      <img src="./src/images/icons.jpg" style={{marginLeft: '20%', width: '60%'}}/>
      <div className='block2'>
        <text className='whatever'>
        whatever your age. whatever your lifestyle. whatever your interests.
        </text>
        <text className='bigtext2'>
        Co-created with gynaecologists, our revolutionary products have been expertly 
        developed to support your intimate microbiome and pH balance, and strengthen overall 
        natural health.<br/><br/> As the experts in intimate hygiene, we want to bring discussion 
        about intimate wellness care out of the dark and demystify the taboos that surround it.
        </text>
      </div>
      <div className='block3'>
        <text className='ourproducts'>
          our products
        </text>
        <div className='containercard'>
          <div className='card'>
            <img src="./src/images/image mask.jpg" style={{width: '100%', height: 'auto'}}/>
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
            <img src="./src/images/image mask1.jpg" style={{width: '100%', height: 'auto'}}/>
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
            <img src="./src/images/image mask2.jpg" style={{width: '100%', height: 'auto'}}/>
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
      </div>
      <img src="./src/images/Asset22.jpg" className='Asset22'/>
      <div className='block4'>
        <text className='keepup'>
        keep up to date with our discoveries
        </text>
        <div className='card2'>
          <img src="./src/images/ScreenShot1.jpg" style={{width: '100%', height: 'auto'}}/>
          <text className='card2text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </text>
        </div>
        <div className='card2'>
          <img src="./src/images/ScreenShot2.jpg" style={{width: '100%', height: 'auto'}}/>
          <text  className='card2text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </text>
        </div>
        <div className='card2'>
          <img src="./src/images/ScreenShot3.jpg" style={{width: '100%', height: 'auto'}}/>
          <text className='card2text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </text>
        </div>
        <button className='seemorebutton'>
          <text className='seemoretext'>
          see more
          </text>
        </button>
      </div>
      <div className='footer'>
        <div className='footertext'>
          <button className='footerbutton' style={{marginLeft: '1.5%'}}>contact us</button>
          <text className='whitebar'>|</text>
          <button className='footerbutton'>faq</button>
          <text className='whitebar'>|</text>
          <button className='footerbutton'>site map</button>
          <text className='whitebar'>|</text>
          <button className='footerbutton'>privacy police</button>
          <text className='whitebar'>|</text>
          <button className='footerbutton'>cookies policy</button>
          <text className='whitebar'>|</text>
          <button className='footerbutton'>legal notice</button>
        </div>
        <img src="./src/images/ulab.png" className='ulab'/>
        <img src="./src/images/insta.png" className='insta'/>
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
