import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import contactUs from '../assets/contact_us.png';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FormComponent from '../components/FormComponent';

const ContactUs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Header Image */}
      <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
        <Box component="img" src={contactUs} sx={{ width: '100%' }} />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
          p: 2,
          gap: 4,
        }}
      >
        {/* Contact Details */}
        <Stack spacing={2} width={{ xs: '100%', md: '50%' }} sx={{ maxWidth: isSmallScreen ? '100%' : 400 }}>
          <Typography variant="h4" fontWeight="bold">
            Contact Details
          </Typography>
          <Typography>
            Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PlaceIcon />
            <Typography>NSL Technologies, 1234 Street Name, City, State, Zip Code</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon />
            <Stack>
              <Typography fontWeight="bold">Our Phone</Typography>
              <Typography>+91 636 XXX XXX6</Typography>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon />
            <Stack>
              <Typography fontWeight="bold">Our Email</Typography>
              <Typography>info@nsltech.com</Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Contact Form */}
        <Box
          sx={{
            flex: 1,
            maxWidth: isSmallScreen ? '100%' : 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: isSmallScreen ? 2 : 4,
            borderRadius: 2,
          }}
        >
          <FormComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;