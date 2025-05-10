import servicesimg from '../../assets/services.png';
import developmentServices from '../../assets/development_services.jpg';
import ServicesCarousel from "../../components/Services";
import { services } from "../../data/overAllServices";
import { DevelopmentContent } from "./Content/Contents";
import CardHOC from "../../components/CardHoc";

const Developements = CardHOC({
  Component: DevelopmentContent,
  headSrc: servicesimg,
  cardSrc: developmentServices,
  cardHeader: "Development",
});

const Development = () => {
  return (
    <>
      <Developements />
      <ServicesCarousel serviceHeadline={"Related Services"} data={services} />
    </>
  );
};

export default Development;