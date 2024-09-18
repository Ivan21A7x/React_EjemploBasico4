import { createContext, useEffect, useState } from 'react';

// Crear el contexto para la calculadora
export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [currentAdd, setCurrentAdd] = useState(0);
    const [currentDiv, setCurrentDiv] = useState(0);
    const [currentMul, setCurrentMul] = useState(0);
    const [currentSqr, setCurrentSqr] = useState(0);
    const [currentSub, setCurrentSub] = useState(0);
    const [operation, setOperation] = useState(null);  // Para almacenar la operación seleccionada
    const [displayText, setDisplayText] = useState('');

    // Actualiza el displayText cada vez que cambian los números, la operación o el resultado
    const updateDisplayText = () => {
        let operationS = '';
        switch (operation) {
            case 'add':
                operationS = '+';
                break;
            case 'div':
                operationS = '/';
                break;
            case 'mul':
                operationS = 'x';
                break;
            case 'sqr':
                operationS = 'sqr';
                break;
            case 'sub':
                operationS = '-';
                break;
            case 'null':
                operationS = '';
                break;
            default:
                break;
        }

        setDisplayText(`${firstNumber} ${operationS} ${secondNumber}`);

        // if (operation === null) {
        //     setDisplayText(firstNumber);
        // } else if (secondNumber === '') {
        //     setDisplayText(`${firstNumber} ${operationS}`);
        // } else {
        //     setDisplayText(`${firstNumber} ${operationS} ${secondNumber}`);
        // }
    };

    // Al hacer clic en un número, acumula el dígito en el número adecuado
    const selectNumber = (number) => {
        if (operation === null) {
            setFirstNumber(prev => prev + number);
            console.log("Primer número: ", firstNumber + number);
            // updateDisplayText();
        } else {
            setSecondNumber(prev => prev + number);
            console.log("Segundo número: ", secondNumber + number);
            // updateDisplayText();
        }
        updateDisplayText();
    };

    // Al hacer clic en una operación (ej: '+')
    const handleOperation = (op) => {
        setOperation(op); // Guarda la operación actual
        updateDisplayText();
    };

    // Cuando haces clic en el botón Total ('='), realiza la operación
    const calculateTotal = () => {
        if (firstNumber !== '' && secondNumber !== '') {
            let result = 0;
            let operationS = '';
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(secondNumber);

            if (operation === 'add') {
                result = num1 + num2;
                operationS = '+';
                setCurrentAdd(result); // Actualiza la suma
            }
            if (operation === 'div') {
                result = num1 / num2;
                operationS = '/';
                setCurrentDiv(result);
            }
            if (operation === 'mul') {
                result = num1 * num2;
                operationS = 'x';
                setCurrentMul(result);
            }
            if (operation === 'sqr') {
                result = Math.pow(num1, 1 / num2);
                operationS = 'sqr';
                setCurrentSqr(result);
            }
            if (operation === 'sub') {
                result = num1 - num2;
                operationS = '-';
                setCurrentSub(result);
            }
            
            setDisplayText(`${firstNumber} ${operationS} ${secondNumber} = ${result}`);

            console.log("Resultado: ", result);
            // Reiniciamos los valores
            // setFirstNumber('');
            // setSecondNumber('');
            // setOperation(null);
        }
    };

    // Al hacer clic en una operación (ej: '+')
    const clearDisplay = () => {
        setFirstNumber('');
        setSecondNumber('');
        setOperation(null);
        setDisplayText('');
    };

    useEffect(() => {
        updateDisplayText();
    },[firstNumber, secondNumber, operation]);

    return (
        <CalculatorContext.Provider 
            value={{ selectNumber, handleOperation, calculateTotal, clearDisplay, displayText, currentAdd, currentDiv, currentMul, currentSqr, currentSub }}>
            {children}
        </CalculatorContext.Provider>
    );
};
