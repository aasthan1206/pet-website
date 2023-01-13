import './App.css'
import Hero from './components/Hero'
import HeroCards from './components/HeroCards'
import Description from './components/Description'
import FooterCards from './components/FooterCards'
import Contact from './components/Contact'
import Charities from './components/Charaties'
import Footer from './components/Footer'
import Icons from './components/Icons'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HeroCards />
      <Description />
      <Icons />
      <FooterCards />
      <Contact />
      <Charities />
      <Footer />
    </div>
  );
}

export default App
