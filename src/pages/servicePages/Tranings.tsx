import serviceimg from '../../assets/services.png';
import training from '../../assets/training_services.jpg';
import ServicesCarousel from "../../components/Services";
import { services } from "../../data/overAllServices";
import CardHOC from "../../components/CardHoc";
import { TrainingContent } from "./Content/Contents";

const Trainings = CardHOC({
  Component: TrainingContent,
  headSrc: serviceimg,
  cardSrc: training,
  cardHeader: "Training",
});

const TrainingsPage = () => (
  <>
    <Trainings />
    <ServicesCarousel serviceHeadline={"Upcoming Batches"} data={services} />
  </>
);

export default TrainingsPage;