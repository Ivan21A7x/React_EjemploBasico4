import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';
import { Button, Box } from '@mui/joy';

export default function OpComponent({ operation, value }) {
    const { handleOperation } = useContext(CalculatorContext);

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
            onClick={() => handleOperation(operation)}
            sx={{
                backgroundColor: 'lightgray',
                width: '100%',            // Ocupa todo el ancho disponible
                height: '3rem',          // Altura del botón (ajustable)
                fontSize: { xs: '30px', sm: '35px', md: '35px', lg: '40px' },
                fontWeight: 'bold',
                color: 'black',
                borderRadius: 'lg',
                    '&:hover': {
                    bgcolor: 'gray',
                    color: 'white',
                },
            }}
            >
            {value}
            </Button>
        </Box>
    );
}
