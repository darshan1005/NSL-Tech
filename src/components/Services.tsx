import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
} from '@mui/material';

interface Service {
  serviceHeadline: string;
  data: {
    title: string;
    image: string;
    label: string;
  }[];
}

const ServicesCarousel = ({ serviceHeadline, data }: Service) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Determine the number of visible cards based on screen size
  const visibleCardCount = isSmallScreen ? 1 : isMediumScreen ? 2 : 4;

  // Get the visible cards based on the active index and visible card count
  const visibleCards = data.slice(activeIndex, activeIndex + visibleCardCount).concat(
    data.slice(0, Math.max(0, activeIndex + visibleCardCount - data.length))
  );

  return (
    <>
      <Box sx={{ textAlign: 'center', py: 4, px: { xs: 2, sm: 4 } }}>
        <Typography color='primary' fontWeight={'bold'}>NSL Tech</Typography>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {serviceHeadline}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            overflow: 'hidden',
            mt: 4,
          }}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {visibleCards.map((service, index) => (
            <Card
              key={index}
              sx={{
                width: 300,
                transition: 'transform 0.5s ease',
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
                sx={{ height: 180, objectFit: 'cover' }}
              />
              <CardContent
                sx={{
                  background: theme.palette.primary.main,
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography fontWeight="bold" fontSize="1.1rem">
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Pagination dots */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 1 }}>
          {data.map((_, i) => (
            <Box
              key={i}
              onClick={() => setActiveIndex(i)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: i === activeIndex ? theme.palette.primary.main : '#ccc',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ServicesCarousel;
