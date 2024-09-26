import React from 'react'
import { Button } from '@mui/joy'

export default function NewTaskComponent({ onAddTask }) {

  return (
    <Button
  onClick={onAddTask}
  sx={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#f76c6c',
    color: 'white',
    border: 'solid black 1px',
    borderRadius: '20px',  // Borde redondeado para forma rectangular
    width: { xs: '120px', sm: '140px', md: '160px' },  // Ancho reactivo
    height: { xs: '50px', sm: '60px', md: '70px' },   // Alto reactivo
    padding: { xs: '10px', sm: '15px', md: '20px' },
    fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },  // Tamaño de texto reactivo
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#f53b3b',
      cursor: 'pointer',
    },
  }}
>
  New Task
</Button>


  )
}
