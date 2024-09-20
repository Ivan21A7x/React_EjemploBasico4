import React, { useState } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function NavbarComponent({ setActiveComponent }) {
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Barra de navegación */}
      <AppBar position="static" sx={{ backgroundColor: 'lightgray' }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PORTAFOLIO REACT
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Menú desplegable */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('PageMain')}
            sx={{
              // backgroundColor: '#ADD8E6',
              color: 'white',
              padding: '8px 16px',
              margin: '8px',
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#87CEEB',
              },
            }}
          >Home</Button>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('App1')}
            sx={{
              // backgroundColor: '#ADD8E6',
              color: 'white',
              padding: '8px 16px',
              margin: '8px',
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#87CEEB',
              },
            }}
          >Mostrar Componente 1</Button>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('App2')}
            sx={{
              // backgroundColor: '#ADD8E6',
              color: 'white',
              padding: '8px 16px',
              margin: '8px',
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#87CEEB',
              },
            }}
          >Mostrar Componente 2</Button>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Button
            onClick={() => setActiveComponent('App3')}
            sx={{
              // backgroundColor: '#ADD8E6',
              color: 'white',
              padding: '8px 16px',
              margin: '8px',
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#87CEEB',
              },
            }}
          >Mostrar Componente 3</Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}
