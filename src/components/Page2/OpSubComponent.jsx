import React, { useContext } from 'react'
import { CalculatorContext } from './CalculatorProvider'

export default function OpSubComponent() {
  const { handleOperation } = useContext(CalculatorContext);

  const handleSub = () => {
    handleOperation('sub');
    console.log("La operación es una resta");
  };

  return (
    <button 
    className='bg-gray-300 p-[20px] px-[30px] m-5 text-center text-2xl font-bold text-black hover:bg-darkslateblue hover:text-green-500 rounded-lg'
    onClick={handleSub}>-</button>
  )
}
