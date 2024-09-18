import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider';

export default function DisplayComponent() {
    const { displayText } = useContext(CalculatorContext);

    return (
        <p className='col-span-3 text-black bg-white text-2xl font-bold border border-black p-7 m-5 w-[350px] h-[40px] flex justify-center items-center'>{displayText}</p>
    );
}
