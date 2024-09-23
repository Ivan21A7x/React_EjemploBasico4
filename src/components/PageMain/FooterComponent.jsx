import React from 'react';
import { Box, Typography } from '@mui/joy';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function FooterComponent({ themeMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Barra de navegación fija */}
      <AppBar 
        position="static"  // Hacemos el AppBar fijo
        sx={{
          backgroundColor: themeMode === 'light' ? 'darkslateblue' : 'darkslateblue',
          top: 'auto',     // Esto asegura que el AppBar no esté en la parte superior
          bottom: 0,       // Posiciona el AppBar en la parte inferior
          width: '100%',   // Asegura que ocupe todo el ancho
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              color: 'white',
              textAlign: 'center',
              fontSize: {
                xs: '15px',
                sm: '25px',
                md: '25px',
                lg: '25px'
              },
            }}
          >
            CONTACTO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
