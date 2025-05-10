import About from "../components/About";
import Banner from "../components/Banner";
import ClientInfo from "../components/ClientsInfo";
import Hero from "../components/Hero";
import ServicesCarousel from "../components/Services";
import { services } from "../data/overAllServices";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Banner />
      <ServicesCarousel serviceHeadline={"Our Services"} data={services} />
      <ClientInfo />
    </>
  )
}

export default Home;