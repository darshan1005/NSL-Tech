import { Box, Typography, Divider, List, ListItem } from "@mui/material";
import FormComponent from "../../components/FormComponent";
import ServicesCarousel from "../../components/Services";
import freelancing from '../../assets/freelance_job_support.jpg';
import service from '../../assets/services.png';

const Freelancing = () => {
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
          <Box component="img" src={freelancing} sx={{ width: '100%', borderRadius: 2 }} />
          <Typography variant="h4" fontWeight="bold">
            FreeLancing for support
          </Typography>
          <Typography textAlign="justify" lineHeight={1.8}>
            NSL Technologies is having enormous experience in providing freelance Job Support on 100＋Technologies.
          </Typography>

          <Box>
            <Typography fontWeight="bold" mb={1}>Key Points</Typography>
            <List sx={{ listStyleType: 'disc', pl: 2 }}>
              <ListItem sx={{ display: 'list-item' }}>
                Our strength is 1500+ IT professionals on more than 100+ Technologies.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Technically Real-time experienced professional with Min 7+ years.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Work will be completed within the assured time.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                At Prajosh Technologies you get quality and commitment making it a proven combination for our clients on their work.
              </ListItem>
            </List>
          </Box>

          <Typography textAlign="justify" lineHeight={1.8}>
            At NSL Technologies, you will get the best services in Freelancing Job Support and other Training programs. So, what are you waiting for? You are just a click away!
          </Typography>

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

export default Freelancing;