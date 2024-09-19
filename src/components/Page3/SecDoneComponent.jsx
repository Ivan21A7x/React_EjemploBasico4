import React, { useRef } from 'react';
import TaskComponent from './TaskComponent';
import { Box, Typography } from '@mui/joy';

export default function SecDoneComponent({ tasks, onMoveTask, onUpdateTask }) {
  const tasksRef = useRef(null);

  const handleDragStart = (task) => (e) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
    e.dataTransfer.setData('from', 'done');
  };

  const handleDrop = (section) => (e) => {
    const task = JSON.parse(e.dataTransfer.getData('task'));
    const from = e.dataTransfer.getData('from');
    if (from !== 'done') {
      onMoveTask(task, from, section);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#bdffaa',
        border: '1px solid',
        borderColor: 'black',
        width: '100%',
        height: '100%',
        p: 4,
      }}
      onDrop={handleDrop('done')}
      onDragOver={(e) => e.preventDefault()}
    >
      <Typography 
        level="h2" 
        sx={{ 
          fontSize: '1.25rem', // text-xl
          fontWeight: 'bold', 
          mb: 4 
        }}
      >Done List</Typography>
      <Box 
        ref={tasksRef} 
        sx={{ 
          p: 4, 
          minHeight: '200px' 
        }}
      >
        {tasks.map(task => (
          <TaskComponent 
            key={task.id} 
            task={task} 
            section='done' 
            onDragStart={handleDragStart(task)} 
            onUpdateTask={onUpdateTask}
          />
        ))}
      </Box>
    </Box>
  );
}
