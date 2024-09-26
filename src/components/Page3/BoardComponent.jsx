import React, { useCallback, useRef, useReducer } from 'react';
import SecToDoComponent from './SecToDoComponent';
import SecDoingComponent from './SecDoingComponent';
import SecDoneComponent from './SecDoneComponent';
import NewTaskComponent from './NewTaskComponent';
import { Grid, Box } from '@mui/joy';

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
    case 'DELETE_TASK':
      return {
        ...state,
        todo: state.todo.filter(task => task.id !== action.payload),
        doing: state.doing.filter(task => task.id !== action.payload),
        done: state.done.filter(task => task.id !== action.payload)
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
    if (from !== to) {
      dispatch({ type: 'MOVE_TASK', payload: { task, from, to } });
    }
  }, []);

  const updateTaskText = useCallback((id, text, section) => {
    dispatch({
      type: 'UPDATE_TASK_TEXT',
      payload: { id, text, section }
    });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    });
  }, []);

  return (
    <Box
    sx={{
      m: 1,
      // minHeight: '65vh',
      height: '100%',
      border: '1px solid red',
      display: 'flex',
      flexDirection: 'column', // Distribuye los elementos en filas
      justifyContent: 'space-between', // Espacia las filas equitativamente
    }}
    >
      <Grid container flexDirection="column" flexGrow={1} spacing={0}>
        <Grid sx={{ flexGrow: 1 }}>
          <SecToDoComponent
            tasks={state.todo}
            onMoveTask={moveTask}
            onUpdateTask={updateTaskText}
            onDeleteTask={deleteTask}
          />
        </Grid>
        <Grid sx={{ flexGrow: 1 }}>
          <SecDoingComponent
            tasks={state.doing}
            onMoveTask={moveTask}
            onUpdateTask={updateTaskText}
            onDeleteTask={deleteTask}
          />
        </Grid>
        <Grid sx={{ flexGrow: 1 }}>
          <SecDoneComponent
            tasks={state.done}
            onMoveTask={moveTask}
            onUpdateTask={updateTaskText}
            onDeleteTask={deleteTask}
          />
        </Grid>
      </Grid>
      <NewTaskComponent onAddTask={addTask} />      
    </Box>

  );
}
