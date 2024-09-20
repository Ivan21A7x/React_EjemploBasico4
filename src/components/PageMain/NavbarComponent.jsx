import React, { useState } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function NavbarComponent({ setActiveComponent, setThemeMode, themeMode }) {
  const [anchorEl, setAnchorEl] = useState(null);

  // Controlar apertura/cierre del menú
  const handleMenuOpen = (event) => {
    if (anchorEl) {
      setAnchorEl(null); // Si ya está abierto, lo cierra
    } else {
      setAnchorEl(event.currentTarget); // Si está cerrado, lo abre
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Función para cambiar el tema
  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Barra de navegación */}
      <AppBar position="static" sx={{ backgroundColor: themeMode === 'light' ? 'darkslateblue' : 'darkslateblue' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'white' }}>
            PORTAFOLIO REACT
          </Typography>
          {/* Botón para cambiar el tema */}
          <IconButton color="inherit" onClick={toggleTheme}>
            {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menú desplegable */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          backgroundColor: 'darkslateblue',
          border:'none'
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('PageMain')}
            sx={{
              color: 'white',
              backgroundColor: 'transparent',
              border: 'solid black 1px',
              // padding: '8px 16px',
              // margin: '8px',
              padding:'20px',
              margin:'0px',
              width: '100%',
              textAlign: 'center',
              '&:hover': {
                color: 'black',
                backgroundColor: '#87CEEB',
              },
            }}
          >Home</Button>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('App1')}
            sx={{
              color: 'white',
              backgroundColor: 'transparent',
              border: 'solid black 1px',
              // padding: '8px 16px',
              // margin: '8px',
              padding:'20px',
              margin:'0px',
              width: '100%',
              textAlign: 'center',
              '&:hover': {
                color: 'black',
                backgroundColor: '#87CEEB',
              },
            }}
          >Lista de usuarios</Button>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('App2')}
            sx={{
              color: 'white',
              backgroundColor: 'transparent',
              border: 'solid black 1px',
              // padding: '8px 16px',
              // margin: '8px',
              padding:'20px',
              margin:'0px',
              width: '100%',
              textAlign: 'center',
              '&:hover': {
                color: 'black',
                backgroundColor: '#87CEEB',
              },
            }}
          >Calculadora básica</Button>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('App3')}
            sx={{
              color: 'white',
              backgroundColor: 'transparent',
              border: 'solid black 1px',
              // padding: '8px 16px',
              // margin: '8px',
              padding:'20px',
              margin:'0px',
              width: '100%',
              textAlign: 'center',
              '&:hover': {
                color: 'black',
                backgroundColor: '#87CEEB',
              },
            }}
          >Taskboard</Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}
