import { Box, Button, TextField, Typography } from "@mui/material";

const FormComponent = () => {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Get in Touch
      </Typography>
      <TextField fullWidth label="Name *" variant="outlined" margin="normal" />
      <TextField fullWidth label="Email *" variant="outlined" margin="normal" />
      <TextField fullWidth label="Phone Number *" variant="outlined" margin="normal" />
      <TextField
        fullWidth
        label="Message *"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Send Message
      </Button>
    </Box>
  );
};

export default FormComponent;
