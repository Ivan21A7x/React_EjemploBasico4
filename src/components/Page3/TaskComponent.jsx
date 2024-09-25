import React, { useRef, useEffect, useState } from 'react';
import { Box, Textarea, Menu, MenuItem, IconButton } from '@mui/joy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function TaskComponent({ task, section, onDragStart, onUpdateTask, onMoveTask }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuToggle = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const menuOpStyles = {
    color: 'white',
    textAlign: 'center'
  };

  const textRef = useRef(null);

  // Manejador de cambio de texto
  const handleTextChange = (e) => {
    onUpdateTask(task.id, e.target.value, section);
  };

  useEffect(() => {
    if (textRef.current && textRef.current.value) {
      textRef.current.focus();
      textRef.current.setSelectionRange(textRef.current.value.length, textRef.current.value.length);
    }
  }, [task.text]);

  // Nueva función para mover tareas
  const handleMoveTask = (newSection) => {
    onMoveTask(task, section, newSection);
  };

  return (
    <Box sx={{ border: 'solid black 2px', backgroundColor: 'lightgray' }}>
      
      {/* Botón de menú desplegable */}
      <IconButton aria-label="more options" variant="plain" onClick={handleMenuToggle}>
        <MoreHorizIcon />
      </IconButton>

      {/* Textarea para la tarea */}
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
        rows={4}
      />

      {/* Menú desplegable */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ backgroundColor: 'darkslateblue' }}>
        <MenuItem onClick={() => handleMoveTask('todo')} sx={menuOpStyles}>Mover a To Do List</MenuItem>
        <MenuItem onClick={() => handleMoveTask('doing')} sx={menuOpStyles}>Mover a Doing List</MenuItem>
        <MenuItem onClick={() => handleMoveTask('done')} sx={menuOpStyles}>Mover a Done List</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={menuOpStyles}>Subir prioridad</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={menuOpStyles}>Bajar prioridad</MenuItem>
        <MenuItem onClick={handleMenuClose} sx={menuOpStyles}>Borrar tarea</MenuItem>
      </Menu>
    </Box>
  );
}
