import React, { useCallback, useRef, useReducer } from 'react';
import SecToDoComponent from './SecToDoComponent';
import SecDoingComponent from './SecDoingComponent';
import SecDoneComponent from './SecDoneComponent';
import NewTaskComponent from './NewTaskComponent';
import { Box } from '@mui/joy';

const initialState = {
  todo: [],
  doing: [],
  done: []
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };
    case 'MOVE_TASK':
      const { task, from, to } = action.payload;
      return {
        ...state,
        [from]: state[from].filter(t => t.id !== task.id),
        [to]: [...state[to], task]
      };
    case 'UPDATE_TASK_TEXT':
      return {
        ...state,
        [action.payload.section]: state[action.payload.section].map(task => 
          task.id === action.payload.id 
          ? { ...task, text: action.payload.text }
          : task
        )
      };
    default:
      return state;
  }
}

export default function BoardComponent() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const taskIdRef = useRef(0);

  const addTask = useCallback(() => {
    const newTask = {
      id: taskIdRef.current++,
      text: 'New Task'
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
  }, []);

  const moveTask = useCallback((task, from, to) => {
    dispatch({ type: 'MOVE_TASK', payload: { task, from, to } });
  }, []);

  const updateTaskText = useCallback((id, text, section) => {
    dispatch({
      type: 'UPDATE_TASK_TEXT',
      payload: { id, text, section }
    });
  }, []);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        m: 2,
        minHeight: '550px',
        border: '1px solid',
        borderColor: 'black',
        textAlign: 'center',
        placeItems: 'center',
      }}
    >
      <SecToDoComponent tasks={state.todo} onMoveTask={moveTask} onUpdateTask={updateTaskText} />
      <SecDoingComponent tasks={state.doing} onMoveTask={moveTask} onUpdateTask={updateTaskText} />
      <SecDoneComponent tasks={state.done} onMoveTask={moveTask} onUpdateTask={updateTaskText} />
      <NewTaskComponent onAddTask={addTask} />
    </Box>
  );
}
