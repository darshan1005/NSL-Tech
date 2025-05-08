import { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Slide 1 Title",
      description: "This is the description for slide 1.",
      shortDescription: "This is a short description for slide 1.",
      image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
    },
    {
      title: "Slide 2 Title",
      description: "This is the description for slide 2.",
      shortDescription: "This is a short description for slide 2.",
      image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    },
    {
      title: "Slide 3 Title",
      description: "This is the description for slide 3.",
      shortDescription: "This is a short description for slide 3.",
      image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" width="100%" overflow="hidden">
      <Box
        component="img"
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        sx={{
          width: '100%',
          height: { xs: 490, md: 590 },
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: "50%", md: "33%" },
          transform: 'translate(-50%, -50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: { xs: '10px', sm: '15px', md: '20px' },
          borderRadius: '10px',
          width: { xs: '75%', sm: '70%', md: 'max-content' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h5"
          mb={1}
          data-aos="fade-up"
          key={`shortDescription-${currentIndex}`}
          fontSize={{ xs: '1rem', sm: '1.25rem', md: '1.5rem' }}
        >
          {slides[currentIndex].shortDescription}
        </Typography>
        <Typography
          variant="h4"
          mb={1}
          data-aos="fade-up"
          data-aos-delay="400"
          key={`title-${currentIndex}`}
          fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.5rem' }}
        >
          {slides[currentIndex].title}
        </Typography>
        <Typography
          variant="body1"
          mb={3}
          data-aos="fade-up"
          data-aos-delay="400"
          key={`description-${currentIndex}`}
          fontSize={{ xs: '0.875rem', sm: '1rem', md: '1.125rem' }}
        >
          {slides[currentIndex].description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          data-aos="fade-up"
          data-aos-delay="600"
          key={`button-${currentIndex}`}
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
            padding: { xs: '5px 10px', sm: '8px 15px', md: '10px 20px' },
          }}
        >
          Learn More
        </Button>
      </Box>
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Hero;