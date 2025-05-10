import { Box, Divider, Typography } from "@mui/material";
import FormComponent from "./FormComponent";

const CardHOC = ({
  Component,
  headSrc,
  cardSrc,
  cardHeader,
  relatedServices = ["Development", "IT Consulting", "Freelancing", "Training"],
}: {
  Component: React.ComponentType<Record<string, unknown>>;
  headSrc: string;
  cardSrc: string;
  cardHeader: string;
  relatedServices?: string[];
}) => {
  return function WrappedComponent(props: React.ComponentProps<typeof Component>) {
    return (
      <Box>
        {/* Header Image */}
        <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
          <Box component="img" src={headSrc} sx={{ width: '100%' }} />
        </Box>

        {/* Main Content */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-around"
          alignItems="flex-start"
          gap={4}
          padding={{ xs: 2, sm: 4 }}
        >
          {/* Card Content */}
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
            <Box component="img" src={cardSrc} sx={{ width: '100%', borderRadius: 2 }} />
            <Typography variant="h4" fontWeight="bold">
              {cardHeader}
            </Typography>
            <Component {...props} />
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
                {relatedServices.map((service, index) => (
                  <Typography key={index}>{service}</Typography>
                ))}
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
      </Box>
    );
  };
};

export default CardHOC;