
import service from '../../assets/services.png'
import ServicesCarousel from "../../components/Services";
import consulting from '../../assets/it_consulting_services.jpg'
import { services } from "../../data/overAllServices";
import { ConsultingContent } from "./Content/Contents";
import CardHOC from "../../components/CardHoc";

const ConsultingContents = CardHOC({
  Component: ConsultingContent,
  headSrc: service,
  cardSrc: consulting,
  cardHeader: "Consulting",
});

const Consulting = () => {
  return (
    <>
      <ConsultingContents />
      <ServicesCarousel serviceHeadline={"Reated Services"} data={services} />
    </>
  )
}

export default Consulting;