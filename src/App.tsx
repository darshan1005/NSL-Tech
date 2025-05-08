import About from "./components/About"
import Hero from "./components/Hero"
import MediaHeader from "./components/MediaHeader"
import NavBar from "./components/NavBar"
import ServicesCarousel from "./components/Services"

const App = () => {

  return (
    <>
      <MediaHeader />
      <NavBar />
      <Hero />
      <About />
      <ServicesCarousel />
    </>
  )
}

export default App
