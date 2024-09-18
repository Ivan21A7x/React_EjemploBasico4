import React from 'react'
import UserItemComponent from './UserItemComponent'

export default function UserListComponent({usuarios}) {
    if (!usuarios || !Array.isArray(usuarios) || usuarios.length === 0) {
        // console.log("No hay usuarios disponibles");
        return <p className='text-black mb-4 p-2 font-bold'>Ingresa un usuario</p>;
    }
    return (
        <div>
            <br />
            <br />
            <p className='text-black mb-4 p-2 font-bold'> Usuarios:</p>
            <ul className='flex flex-col text-center list-none'>
                {usuarios.map((usuario, index) => (
                    <div key={index}>
                        <br />
                            <UserItemComponent  usuario={usuario}/>
                        <br />
                        <hr />
                    </div>            
                ))}
            </ul>
        </div>
  )
}
