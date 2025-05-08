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
          <Typography variant="h4" fontWeight="bold">
            +125
          </Typography>
          <Typography variant="body1">Active Clients</Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold">
            +200
          </Typography>
          <Typography variant="body1">Projects Done</Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold">
            +2000
          </Typography>
          <Typography variant="body1">Team Advisors</Typography>
        </Box>
        <Box textAlign="left">
          <Typography variant="h4" fontWeight="bold">
            +06
          </Typography>
          <Typography variant="body1">Glorious Years</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Banner;
