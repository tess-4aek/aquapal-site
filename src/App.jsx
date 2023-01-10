import './scss/App.scss'
import './scss/animate.min.css'
import scrollLock from 'scroll-lock';

import MainScreen from './sections/MainScreen'
import About from './sections/About'
import LinksFixed from './components/LinksFixed/LinksFixed'
import Knows from './sections/Knows'
import Track from './sections/Track'
import Progress from './sections/Progress'
import AddWater from './sections/AddWater'
import Guide from './sections/Guide'
import Features from './sections/Features'
import Memories from './sections/Memories'
import Team from './sections/Team'
import Wave from './sections/Wave'
import Reviews from './sections/Reviews'
import Footer from './sections/Footer'
import ScrollUp from './components/ScrollUp/ScrollUp'
import Preloader from './components/Preloader/Preloader'
import { useState } from 'react'
import { useEffect } from 'react'



// react-helmet


const App = () => {

  const [loaded, setLoaded] = useState(false)


  scrollLock.disablePageScroll()
  // global.onload = () => {

  //   setTimeout(() => {
  //     setLoaded(true)
  //   }, 3000)

  // }

  // if (loaded == false) {

  //   return <Preloader />
  // }

  setTimeout(() => {
    setLoaded(true)
    scrollLock.enablePageScroll()
  }, 5000)

            

  return (
    <div className="App" style={{ position: 'relative' }}>
      {loaded == false ? <Preloader /> : null}
      <ScrollUp />
      <MainScreen />
      <About />
      <LinksFixed />
      <Knows />
      <Track />
      <Progress />
      <AddWater />
      <Guide />
      <Features />
      <Memories />
      <Team />
      <Reviews />
      <Wave />
      <Footer />
    </div>
  )
}

export default App
