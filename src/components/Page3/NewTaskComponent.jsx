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
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      padding: '20px',
      fontSize: '2rem',
      textAlign: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        backgroundColor: '#f53b3b',
        cursor: 'pointer',
      },
    }}
    >+</Button>
  )
}
