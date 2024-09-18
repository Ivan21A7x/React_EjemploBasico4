import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';

export default function OpTotalComponent() {
  const { calculateTotal } = useContext(CalculatorContext);

  const handleTotal = () => {
    calculateTotal();  // Realiza el cálculo
    // console.log('El total es: ', currentSum);  // Imprime el resultado actual
  };

  return (
    <button 
    className='bg-gray-300 p-[20px] px-[30px] m-5 text-center text-2xl font-bold text-black hover:bg-darkslateblue hover:text-green-500 rounded-lg'
    onClick={handleTotal}>=</button>
  );
}
