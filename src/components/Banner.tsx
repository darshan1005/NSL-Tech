import { Box, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      color="white"
      padding={4}
      borderRadius={2}
      width={{ xs: "90%", sm: "80%", md: "60%" }}
      margin="0 auto"
      sx={{ background: "linear-gradient(to right, #00cfff, #0072bc)" }}
    >
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent="space-evenly"
        alignItems="center"
        gap={2}
      >
        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
            +125
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" } }}>Active Clients</Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
            +200
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" } }}>Projects Done</Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
            +2000
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" } }}>Team Advisors</Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}>
            +06
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" } }}>Glorious Years</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;
