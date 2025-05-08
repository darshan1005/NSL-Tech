import { Box, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        gap: 4,
        padding: 4,
        backgroundColor: '#c8dbef',
      }}
    >
      <Box width={300}>
        {/* Logo and Description */}
        <Box>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            NSL-Tech
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            Online Training | IT Consulting | Freelance Job Support | Corporate Training | IT Services | US Staffing | Remote Developer Positions Available on Contract
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box>
          <IconButton href="https://facebook.com" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank">
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank">
            <Twitter />
          </IconButton>
        </Box>
      </Box>

      {/* Quick Links */}
      <Box>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Quick Links
        </Typography>
        {['Home', 'About Us', 'Services', 'Careers', 'Contact Us'].map((link, index) => (
          <Typography key={index} variant="body2" mb={1}>
            <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} color="inherit" underline="hover">
              {link}
            </Link>
          </Typography>
        ))}
      </Box>

      {/* Services */}
      <Box>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Services
        </Typography>
        {['IT Consulting', 'Online Training', 'Freelance Job Support', 'Corporate Training', 'US Staffing'].map(
          (service, index) => (
            <Typography key={index} variant="body2" mb={1}>
              {service}
            </Typography>
          )
        )}
      </Box>

      {/* Get in Touch */}
      <Box>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Get in Touch
        </Typography>
        <Typography variant="body2" mb={1}>
          Address: 123 Tech Street, Silicon Valley, CA, USA
        </Typography>
        <Typography variant="body2" mb={1}>
          Mobile: +1 (123) 456-7890
        </Typography>
        <Typography variant="body2">
          Email: <Link href="mailto:info@nsl-tech.com" color="inherit" underline="hover">info@nsl-tech.com</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
