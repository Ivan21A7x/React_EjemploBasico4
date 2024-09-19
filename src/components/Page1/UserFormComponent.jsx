import { useState } from "react";
import { Input, Button } from '@mui/joy';

export default function UserFormComponent({addUser}) {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [id, setID] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (nombre && edad && id) {
            const nuevoUsuario = { nombre, edad, id };
            addUser(nuevoUsuario);

            console.log(nuevoUsuario);
            
            // Resetea los valores a cadenas vacías
            setNombre("");
            setEdad("");
            setID("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-9">
            <Input
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Nombre"
                size="md"
                sx={{
                    margin: '20px',
                    fontWeight: 'bold',
                    '--Input-focusedInset': 'var(--any, )',
                    '--Input-focusedThickness': '0.25rem',
                    '--Input-focusedHighlight': '#4CAF50',
                    '&::before': {
                        transition: 'box-shadow .15s ease-in-out',
                    },
                    '&:focus-within': {
                        borderColor: 'darkslateblue',
                    },
                }}
                required  
            />
            <Input 
                type="number" 
                value={edad} 
                onChange={(e) => setEdad(e.target.value)} 
                placeholder="Edad"
                size="md"
                sx={{
                    margin: '20px',
                    fontWeight: 'bold',
                    '--Input-focusedInset': 'var(--any, )',
                    '--Input-focusedThickness': '0.25rem',
                    '--Input-focusedHighlight': '#4CAF50',
                    '&::before': {
                        transition: 'box-shadow .15s ease-in-out',
                    },
                    '&:focus-within': {
                        borderColor: 'darkslateblue',
                    },
                }}
                required  
            />
            <Input 
                type="text" 
                value={id} 
                onChange={(e) => setID(e.target.value)} 
                placeholder="ID" 
                size="md"
                sx={{
                    margin: '20px',
                    fontWeight: 'bold',
                    '--Input-focusedInset': 'var(--any, )',
                    '--Input-focusedThickness': '0.25rem',
                    '--Input-focusedHighlight': '#4CAF50',
                    '&::before': {
                        transition: 'box-shadow .15s ease-in-out',
                    },
                    '&:focus-within': {
                        borderColor: 'darkslateblue',
                    },
                }}
                required  
            />
            <Button
                type="submit"
                size="lg"
                variant="solid"
                color="primary"
                sx={{
                    margin: '16px',
                    // backgroundColor: '#4CAF50',
                    // fontWeight: 'bold',
                    // '&:hover': {
                    //     backgroundColor: '#45A049',
                    // },                        
                }}
            >Agregar usuario</Button>

        </form>
    );
}