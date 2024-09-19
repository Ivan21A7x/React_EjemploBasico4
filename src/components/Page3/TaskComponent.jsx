import React, { useRef, useEffect } from 'react';
import { Textarea } from '@mui/joy';

export default function TaskComponent({ task, section, onDragStart, onUpdateTask }) {
  const textRef = useRef(null);

  // Manejador de cambio de texto
  const handleTextChange = (e) => {
    onUpdateTask(task.id, e.target.value, section); // Captura el valor tal cual, incluyendo los saltos de línea
  };

  useEffect(() => {
    if (textRef.current && textRef.current.value) {
      textRef.current.focus();
      // Coloca el cursor al final del texto
      textRef.current.setSelectionRange(textRef.current.value.length, textRef.current.value.length);
    }
  }, [task.text]);

  return (
    <Textarea
      ref={textRef}
      sx={{
        backgroundColor: '#ffffc6',
        p: 2,
        m: 1,
        border: '1px solid',
        borderColor: 'black',
        resize: 'none',
        whiteSpace: 'pre-wrap',
      }}
      draggable
      onDragStart={onDragStart}
      value={task.text}
      onChange={handleTextChange}
      rows={4} // Ajusta el tamaño inicial del Textarea
    />
  );
}
