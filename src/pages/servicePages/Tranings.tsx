import { Box, Button, Divider, Typography } from "@mui/material";
import service from '../../assets/services.png';
import training from '../../assets/training_services.jpg'
import FormComponent from "../../components/FormComponent";
import ServicesCarousel from "../../components/Services";

const Trainings = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
        <Box component="img" src={service} sx={{ width: '100%' }} />
      </Box>

      {/* Main Content */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-around"
        alignItems="flex-start"
        gap={4}
        padding={4}
      >
        {/* Development Details */}
        <Box
          width={{ xs: '100%', md: '50%' }}
          display="flex"
          flexDirection="column"
          gap={2}
          border="1px solid #ccc"
          p={2}
          borderRadius={2}
          boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
        >
          <Box component="img" src={training} sx={{ width: '100%', borderRadius: 2 }} />
          <Typography variant="h4" fontWeight="bold">
            Training
          </Typography>
          <Typography textAlign="justify" lineHeight={1.8}>
            NSL Technologies helps you connect the world’s best online learning community delivering the best learning experience. Here lots of learners hone the cutting-edge skills to advance their careers, get expertise, and pursue the work they love. We provide training in a diverse range of technologies, projects based on real-time challenges, and Job Support to help individuals to kick start their professional careers.

          </Typography>

          <Typography textAlign="justify" lineHeight={1.8}>
            NSL Technologies has a proficient trainers’ team with good hands-on experience in the industry. They will share their insights with the candidates as per their requirements thus shaping them a competitive IT professionals. JP aims to make every individual rise high in their success ladder with good career growth as a competitive online training institute. It offers optimal levels of guidance and technical training to candidates with unmatchable expertise.
          </Typography>
          <Box display={'flex'} gap={2} mt={2} alignItems={'flex-start'}>
            <Button>Online Training</Button>
            <Button>Corporate Training</Button>
          </Box>
        </Box>

        {/* Related Services and Quick Enquiry */}
        <Box
          width={{ xs: '100%', md: '40%' }}
          display="flex"
          flexDirection="column"
          gap={4}
        >
          {/* Related Services */}
          <Box>
            <Typography variant="h5" fontWeight="bold" mb={1}>
              Related Services
            </Typography>
            <Divider />
            <Box gap={2} display="flex" flexDirection="column" padding={2}>
              <Typography>Development</Typography>
              <Typography>IT Consulting</Typography>
              <Typography>Freelancing</Typography>
              <Typography>Training</Typography>
            </Box>
          </Box>

          {/* Quick Enquiry */}
          <Box>
            <Typography variant="h5" fontWeight="bold" mb={1}>
              Quick Enquiry
            </Typography>
            <Divider />
            <Box
              borderRadius={2}
              padding={2}
              boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
              display="flex"
              flexDirection="column"
              gap={2}
              mt={2}
              border="1px solid #ccc"
            >
              <FormComponent />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Services Carousel */}
      <ServicesCarousel />
    </>
  )
}

export default Trainings;