import { Box, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Divider = () => (
  <Box sx={{ width: '1px', height: '24px', backgroundColor: 'rgba(255, 255, 255, 0.5)', opacity: 0.8 }} />
);

const MediaHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'flex-start',
        alignItems: 'center',
        px: { xs: 0, sm: 5, md: 10 },
        py: 1,
        background: 'linear-gradient(to right, #00cfff, #0072bc)',
        color: 'white',
        fontSize: '14px',
        gap: 1,
      }}
    >
      <Stack direction='row' alignItems="center" spacing={{ xs: 1, md: 2 }} >
        <FacebookIcon />
        <Divider />
        <XIcon />
        <Divider />
        <LinkedInIcon />
        <Divider />
        <InstagramIcon />
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction={'row'} flexWrap={'wrap'} alignItems="center" justifyContent={'center'} spacing={{ xs: 1, md: 2 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PhoneIcon fontSize="small" />
          <Typography variant="body2">+91 636 XXX XXX6</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <EmailIcon fontSize="small" />
          <Typography variant="body2">info@nsltech.com</Typography>
        </Stack>
      </Stack>
    </Box >
  );
};

export default MediaHeader;
