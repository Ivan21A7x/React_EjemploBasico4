import { useState } from "react";

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
            <input 
                className="m-2 p-2 w-1/2 text-center border border-black"
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Nombre" 
            />
            <input 
                className="m-2 p-2 w-1/2 text-center border border-black"
                type="number" 
                value={edad} 
                onChange={(e) => setEdad(e.target.value)} 
                placeholder="Edad" 
            />
            <input 
                className="m-2 p-2 w-1/2 text-center border border-black"
                type="text" 
                value={id} 
                onChange={(e) => setID(e.target.value)} 
                placeholder="ID" 
            />
            <button className="m-2 p-2 bg-green-500 text-white border border-black font-bold" type="submit">Agregar Usuario</button>
        </form>
    );
}