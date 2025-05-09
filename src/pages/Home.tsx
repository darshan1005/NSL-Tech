import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ServicesCarousel from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Banner />
      <ServicesCarousel />
      <Footer />
    </>
  )
}

export default Home;