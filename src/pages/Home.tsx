import About from "../components/About";
import Banner from "../components/Banner";
import ClientInfo from "../components/ClientsInfo";
import Hero from "../components/Hero";
import ServicesCarousel from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Banner />
      <ServicesCarousel />
      <ClientInfo />
    </>
  )
}

export default Home;