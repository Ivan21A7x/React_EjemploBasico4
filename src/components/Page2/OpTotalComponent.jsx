import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';
import { Box, Button } from '@mui/joy';

export default function OpTotalComponent() {
  const { calculateTotal } = useContext(CalculatorContext);

  const handleTotal = () => {
    calculateTotal();  // Realiza el cálculo
    // console.log('El total es: ', currentSum);  // Imprime el resultado actual
  };

  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center', // Centra el botón horizontalmente
            alignItems: 'center',     // Centra el botón verticalmente
            height: '100%',           // Ocupa todo el alto del Grid
            margin: '5%',
        }}
        >
            <Button
            onClick={handleTotal}
            sx={{
                backgroundColor: 'lightgray',
                width: '100%',            // Ocupa todo el ancho disponible
                height: '3rem',          // Altura del botón (ajustable)
                fontSize: '2rem',        // Tamaño de fuente ajustado
                fontWeight: 'bold',
                color: 'black',
                borderRadius: 'lg',
                    '&:hover': {
                    bgcolor: 'gray',
                    color: 'white',
                },
            }}
            >
            =
            </Button>
        </Box>
  );
}
