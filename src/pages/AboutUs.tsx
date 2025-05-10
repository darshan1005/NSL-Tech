import { Box } from "@mui/material";
import aboutUs from '../assets/about_us.png';
import ClientInfo from "../components/ClientsInfo";
import About from "../components/About";

const AboutUs = () => {
  return (
    <Box>
      <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
        <Box component={"img"} src={aboutUs} sx={{ width: '100%' }} />
      </Box>
      <About />
      <ClientInfo />
    </Box>
  );
}

export default AboutUs;