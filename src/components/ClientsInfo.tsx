import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import wolrdMap from '../assets/bg-maps-dots.jpg'

const ClientInfo = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign={'center'} mt={4}>
        Our trusted partners
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
          py: 3,
          px: 2,
          backgroundImage: `url(${wolrdMap})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          mb: 4,
        }}
      >
        {['Microsoft', 'Google', 'Amazon', 'Facebook', 'Apple', 'IBM', 'Oracle'].map((company, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 3,
              py: 1.5,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontWeight: 'bold',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {company}
          </Box>
        ))}

        {/* Client Reviews */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          {[
            {
              review: 'The team provided exceptional service and helped us achieve our goals seamlessly.',
              name: 'John Doe',
              location: 'New York, USA',
            },
            {
              review: 'Their expertise and professionalism exceeded our expectations. Highly recommended!',
              name: 'Jane Smith',
              location: 'London, UK',
            },
          ].map((client, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 400,
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <CardContent>
                <Typography variant="body1" color="textSecondary" mb={2}>
                  "{client.review}"
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {client.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {client.location}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ClientInfo; 