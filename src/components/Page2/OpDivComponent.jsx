import React, { useContext } from 'react'
import { CalculatorContext } from './CalculatorProvider'

export default function OpDivComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleDiv = () => {
    handleOperation('div');
    console.log(("La operación es una división"));
  };

  return (
    <button 
    className='bg-gray-300 p-[20px] px-[30px] m-5 text-center text-2xl font-bold text-black hover:bg-darkslateblue hover:text-green-500 rounded-lg'
    onClick={handleDiv}>&divide;</button>
  );
}