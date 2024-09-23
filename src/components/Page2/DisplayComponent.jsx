import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';
import { Typography, Box } from '@mui/joy';

export default function DisplayComponent() {
    const { displayText } = useContext(CalculatorContext);

    return (
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',   // Centra horizontalmente
        alignItems: 'center',       // Centra verticalmente
        height: '5rem',             // Altura relativa del display
        width: '100%',              // Ocupa todo el ancho disponible
        backgroundColor: '#ffffc6', // Color de fondo suave
        borderRadius: '0.5rem',     // Bordes redondeados
        border: '0.1rem solid black', // Borde
        padding: '0.5rem',          // Espaciado interno
        boxSizing: 'border-box',    // Asegura que el padding no altere el tamaño total
      }}
    >
      <Typography
        sx={{
          color: 'black',
          // fontSize: '2rem',         // Tamaño de fuente ajustado
          fontSize: { xs: '20px', sm: '25px', md: '35px', lg: '25px' },
          fontWeight: 'bold',       // Negrita
          textAlign: 'center',       // Alinea el texto a la derecha
          width: '100%',            // Ocupa todo el ancho del Box
          overflow: 'hidden',       // Evita que el texto se desborde
          whiteSpace: 'nowrap',     // Evita el salto de línea
        }}
      >
        {displayText}
      </Typography>
    </Box>
    );
}