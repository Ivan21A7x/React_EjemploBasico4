import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';

export default function OpAddComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleAdd = () => {
    handleOperation('add'); // Establece que la operación es una suma
    console.log("La operación es una suma");
  };

  return (
    <button 
    className='bg-gray-300 p-[20px] px-[30px] m-5 text-center text-2xl font-bold text-black hover:bg-darkslateblue hover:text-green-500 rounded-lg'
    onClick={handleAdd}>+</button>
  );
}
