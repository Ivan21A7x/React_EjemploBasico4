import React, { useContext } from 'react'
import { CalculatorContext } from './CalculatorProvider'
import { Button } from '@mui/joy';

export default function OpMulComponent() {
  const { handleOperation } = useContext(CalculatorContext);
  
  const handleMul = () => {
    handleOperation('mul');
  };

  return (
    <Button 
    onClick={handleMul}
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
    >&times;</Button>
  );
}
