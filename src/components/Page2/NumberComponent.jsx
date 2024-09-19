import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';
import { Button } from '@mui/joy';

export default function NumberComponent({ number }) {
    const { selectNumber } = useContext(CalculatorContext);
    
    return (
        <div>
            <Button
            onClick={() => selectNumber(number)}
            sx={{
                backgroundColor: 'lightgray',
                p: 2,
                px: 3,
                m: 2,
                textAlign: 'center',
                fontSize: '2xl',
                fontWeight: 'bold',
                color: 'black',
                '&:hover': {
                    bgcolor: 'gray',
                    color: 'white',
                },
                borderRadius: 'lg',
            }}
            >{number}</Button>
        </div>
    );
}
