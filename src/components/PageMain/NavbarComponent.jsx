import React, { useState } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function NavbarComponent({ setActiveComponent, setThemeMode, themeMode }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuToggle = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  const buttonStyles = {
    color: 'white',
    backgroundColor: 'transparent',
    border: 'solid black 1px',
    width: '100%',
    textAlign: 'center',
    padding: '2vh',
    fontSize: { xs: '15px', sm: '20px', md: '25px', lg: '20px' },
    '&:hover': {
      color: 'black',
      backgroundColor: '#87CEEB',
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'darkslateblue', top: 0 }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" onClick={handleMenuToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', fontSize: { xs: '15px', sm: '25px' } }}>
            PORTAFOLIO REACT
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ backgroundColor: 'darkslateblue', paddingTop:'3vh' }}>
        {['PageMain', 'App1', 'App2', 'App3'].map((component, index) => (
          <MenuItem key={index} onClick={handleMenuClose}>
            <Button onClick={() => setActiveComponent(component)} sx={buttonStyles}>
              {component === 'PageMain' ? 'Home' : component === 'App1' ? 'Lista de usuarios' : component === 'App2' ? 'Calculadora básica' : 'Taskboard'}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
