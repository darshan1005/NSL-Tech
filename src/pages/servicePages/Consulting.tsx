import { Box, Divider, Typography } from "@mui/material";
import service from '../../assets/services.png'
import FormComponent from "../../components/FormComponent";
import ServicesCarousel from "../../components/Services";
import consulting from '../../assets/it_consulting_services.jpg'

const Consulting = () => {
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
          <Box component="img" src={consulting} sx={{ width: '100%', borderRadius: 2 }} />
          <Typography variant="h4" fontWeight="bold">
            IT Consulting
          </Typography>
          <Typography textAlign="justify" lineHeight={1.8}>
            Prajosh Technologies will do marketing for H1B, OPT / CPT, and Green card profiles on various technologies in the United States through well-renowned organizations with Attractive PayScale.
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

export default Consulting;