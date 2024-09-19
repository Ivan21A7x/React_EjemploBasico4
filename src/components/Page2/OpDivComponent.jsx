import React, { useContext } from 'react'
import { CalculatorContext } from './CalculatorProvider'
import { Button } from '@mui/joy';

export default function OpDivComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleDiv = () => {
    handleOperation('div');
  };

  return (
    <Button 
    onClick={handleDiv}
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
  >&divide;</Button>
  );
}