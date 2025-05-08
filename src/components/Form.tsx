import { Box, Button, TextField, Typography, Modal, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';

interface FormProps {
  open?: boolean;
  handleClose?: () => void;
}

const Form = ({ open = false, handleClose }: FormProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box p={3}>
      {/* Popup Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: isSmallScreen ? '90%' : 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: isSmallScreen ? 2 : 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Get in Touch
          </Typography>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleClose}
          >
            Send Message
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Form;
