import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';
import { Button } from '@mui/joy';

export default function OpTotalComponent() {
  const { calculateTotal } = useContext(CalculatorContext);

  const handleTotal = () => {
    calculateTotal();  // Realiza el cálculo
    // console.log('El total es: ', currentSum);  // Imprime el resultado actual
  };

  return (
    <Button 
    onClick={handleTotal}
    sx={{
      backgroundColor: 'lightgray',
      p: 2,
      px: 3,
      m: 2,
      textAlign: 'center',
      fontSize: 'xl2',
      fontWeight: 'bold',
      color: 'black',
      '&:hover': {
        bgcolor: 'gray',
        color: 'white',
      },
      borderRadius: 'lg',
    }}
    >=</Button>
  );
}
