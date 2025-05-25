import { Box, Button, Stack, Typography } from "@mui/material";
import demo2 from '../assets/demo-2.png';
import demo3 from '../assets/demo-3.png';

const About = () => {
  return (
    <>
      <Box
        width={{ xs: '100%', sm: '80%', md: '60%' }}
        margin="0 auto"
        display="flex"
        py={4}
        px={{ xs: 2, sm: 0 }}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box flex={1}>
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight="bold" color="primary" textAlign="center">
              About Company
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              NSL Technologies
            </Typography>
            <Typography variant="body1" color="textSecondary" lineHeight={1.8}>
              At NSL Technologies, we believe that persistent enhancement and a nimble approach to technology make online businesses sustainable and able to compete. Unleash the complete potential of your web presence and watch your business grow online with our 360-degree development service including web, mobile app services. Our team of developers and engineers place us at the center of your business so that we know exactly what solutions you need in order to deliver a high-quality product for your target audience. The immense experience of our IT specialist teams is what sets us apart as the best IT service provider in the Market.
            </Typography>
            <Box display="flex" gap={1}>
              <Box>
                <Box
                  component="img"
                  src={demo2}
                  alt="Experience demo image"
                  sx={{ height: 80, objectFit: 'contain' }}
                />
                <Typography variant="h6" fontWeight="bold" marginTop={1}>
                  Experience
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
              <Box>
                <Box
                  component="img"
                  src={demo3}
                  alt="Quick Support demo image"
                  sx={{ height: 80, objectFit: 'contain' }}
                />
                <Typography variant="h6" fontWeight="bold" marginTop={1}>
                  Quick Support
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Box>
            <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>
              Read More
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default About;