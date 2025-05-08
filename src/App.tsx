import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MediaHeader from "./components/MediaHeader"
import NavBar from "./components/NavBar"
import ScrollToTop from "./components/ScrollToTop"
import ServicesCarousel from "./components/Services"

const App = () => {

  return (
    <>
      <MediaHeader />
      <NavBar />
      <Hero />
      <About />
      <ServicesCarousel />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
