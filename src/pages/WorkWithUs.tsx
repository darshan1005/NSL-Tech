import { Box, TextField, Button, MenuItem } from "@mui/material";
import withUs from '../assets/work_with.png'

const WorkWithUs = () => {
  return (
    <>
      <Box sx={{ width: '100%', height: 'auto', position: 'relative' }}>
        <Box component="img" src={withUs} sx={{ width: '100%' }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 2, sm: 4 },
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 3,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              placeholder="Name *"
              fullWidth
              required
            />
            <TextField
              placeholder="Email *"
              fullWidth
              required
            />
          </Box>
          <TextField
            placeholder="Phone Number *"
            fullWidth
            required
          />
          <TextField
            placeholder="Technology You Like to Work *"
            fullWidth
            required
          />
          <TextField
            select
            placeholder="Interested to Work As *"
            fullWidth
            required
          >
            <MenuItem value="Full-Time">Full-Time</MenuItem>
            <MenuItem value="Part-Time">Part-Time</MenuItem>
            <MenuItem value="Intern">Intern</MenuItem>
          </TextField>
          <TextField
            placeholder="Message *"
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default WorkWithUs;