import './scss/App.scss'
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

function App() {
  return (
    <div className="App">
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
