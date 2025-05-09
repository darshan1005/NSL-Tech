import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  Typography,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ExpandMore,
  ExpandLess,
  Phone,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import PTech from '../assets/demo-logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const servicesAndLinks = [{ service: 'Development', link: '/services/development' }, { service: 'IT Consulting', link: '/services/consulting' }, { service: 'Freelance Job Support', link: '/services/freelacing' }, { service: 'Trainings', link: '/services/trainigs' }];

  return (
    <>
      {/* Main Navbar */}
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={PTech} alt="demo Logo" style={{ height: 40 }} />
          </Box>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>

              <Button color='inherit'><Link to="/">Home</Link></Button>
              <Button color='inherit'><Link to="/aboutus">About Us</Link></Button>

              <Button
                color="inherit"
                endIcon={<ExpandMore />}
                onClick={handleMenuOpen}
              >
                Services
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {Object.values(servicesAndLinks).map((service) => (
                  <MenuItem key={service.service} onClick={handleMenuClose}>
                    <Link to={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {service.service}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>

              <Button color='inherit'><Link to="/workwithus">Work With Us</Link></Button>
              <Button color='inherit'><Link to="/contuctus">Contact Us</Link></Button>

              <Box sx={{ backgroundColor: 'white', py: 1, px: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Phone sx={{ mr: 1, color: 'blue' }} />
                <Box>
                  <Typography variant="body2" fontWeight="bold" >Have any question ?</Typography>
                  <Typography variant="body2" fontWeight="bold" sx={{ color: 'grey' }}>
                    +91 636 XXX XXX6
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {['Home', 'About Us'].map((item) => (
              <ListItem component={'button'} key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}

            <ListItem component={'button'} onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}>
              <ListItemText primary="Services" />
              {mobileSubMenuOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={mobileSubMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {Object.values(servicesAndLinks).map((service) => (
                  <ListItem component={Link} to={service.link} key={service.service} sx={{ pl: 4 }} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItemText primary={service.service} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            {['Work With Us', 'Contact Us'].map((item) => (
              <ListItem component={'button'} key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
