import ServicesCarousel from "../../components/Services";
import freelancing from '../../assets/freelance_job_support.jpg';
import serviceimg from '../../assets/services.png';
import { services } from "../../data/overAllServices";
import CardHOC from "../../components/CardHoc";
import { FreelancingContent } from "./Content/Contents";

const FreeLancingContents = CardHOC({
  Component: FreelancingContent,
  headSrc: serviceimg,
  cardSrc: freelancing,
  cardHeader: "Freelancing",
});


const Freelancing = () => {
  return (
    <>
      <FreeLancingContents />
      <ServicesCarousel serviceHeadline={"Realted Services"} data={services} />
    </>
  )
}

export default Freelancing;