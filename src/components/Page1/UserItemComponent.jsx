import React from 'react'

export default function UserItemComponent({usuario}) {
  return (
    <li>
        <p>Nombre: {usuario.nombre}</p>
        <p>Edad: {usuario.edad}</p>
        <p>ID: {usuario.id}</p>
    </li>
  )
}
