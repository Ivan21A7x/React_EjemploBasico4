import React, { useContext } from 'react'
import { CalculatorContext } from './CalculatorProvider'
import { Button } from '@mui/joy';

export default function OpSubComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleSub = () => {
    handleOperation('sub');
  };

  return (
    <Button 
    onClick={handleSub}
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
    >-</Button>
  )
}
