import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';
import { Typography } from '@mui/joy';

export default function DisplayComponent() {
    const { displayText } = useContext(CalculatorContext);

    return (
        <Typography
        sx={{
            gridColumn: 'span 3',
            color: 'black',
            backgroundColor: 'white',
            fontSize: '2xl',
            fontWeight: 'bold',
            border: '1px solid black',
            p: 5,
            m: 3,
            width: '350px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >{displayText}</Typography>
    );
}
