import React, { useRef } from 'react';
import TaskComponent from './TaskComponent';
import { Box, Typography } from '@mui/joy';

export default function SecDoingComponent({ tasks, onMoveTask, onUpdateTask }) {
  const tasksRef = useRef(null);

  const handleDragStart = (task) => (e) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
    e.dataTransfer.setData('from', 'doing');
  };

  const handleDrop = (section) => (e) => {
    const task = JSON.parse(e.dataTransfer.getData('task'));
    const from = e.dataTransfer.getData('from');
    if (from !== 'doing') {
      onMoveTask(task, from, section);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffff7c',
        border: '1px solid',
        borderColor: 'black',
        width: '100%',
        height: '100%',
        p: 4,
      }}
      onDrop={handleDrop('doing')}
      onDragOver={(e) => e.preventDefault()}
    >
      <Typography 
        level="h2" 
        sx={{ 
          fontSize: '1.25rem', // text-xl
          fontWeight: 'bold', 
          mb: 4 
        }}
      >Doing List</Typography>
      <Box 
        ref={tasksRef} 
        sx={{ 
          p: 4, 
        }}
      >
        {tasks.map(task => (
          <TaskComponent 
            key={task.id} 
            task={task} 
            section='doing' 
            onDragStart={handleDragStart(task)} 
            onUpdateTask={onUpdateTask}
          />
        ))}
      </Box>
    </Box>
  );
}
