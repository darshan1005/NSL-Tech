import { Box, Divider, Typography } from "@mui/material";
import services from '../../assets/services.png';
import developmentServices from '../../assets/development_services.jpg';
import FormComponent from "../../components/FormComponent";
import ServicesCarousel from "../../components/Services";

const Development = () => {
  return (
    <>
      {/* Header Image */}
      <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
        <Box component="img" src={services} sx={{ width: '100%' }} />
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
          <Box component="img" src={developmentServices} sx={{ width: '100%', borderRadius: 2 }} />
          <Typography variant="h4" fontWeight="bold">
            Development
          </Typography>
          <Typography textAlign="justify" lineHeight={1.8}>
            Whether it is web development, app development our teams will use the best technologies to stay ahead of the competition with our intuitive development skills. Our team of developers and engineers place us at the center of your business so that we know exactly what solutions you need in order to deliver a high-quality product for your target audience. The immense experience of our IT specialist teams is what sets us apart as the best IT service provider in the Market.
          </Typography>
          <Typography textAlign="justify" lineHeight={1.8}>
            NSL Technologies delivers high-quality solutions customized to the customer's specific requirements such as extending and enhancing an existing solution or building an entirely new and innovative application at very competitive costs using our flexible delivery models.
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
  );
};

export default Development;