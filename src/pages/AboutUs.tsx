import { Box } from "@mui/material";
import aboutUs from '../assets/about_us.png';

const AboutUs = () => {
  return (
    <Box>
      <Box component={"img"} src={aboutUs} />
    </Box>
  );
}

export default AboutUs;