import { useState } from 'react';
import UserFormComponent from './UserFormComponent'
import UserListComponent from './UserListComponent';
import { Box } from '@mui/joy';

function App1() {
  const [usuarios, setUsuarios] = useState([]);

  const addUser = (nuevoUsuario) => {
    setUsuarios(prevUsuarios => [...prevUsuarios, nuevoUsuario]);
  };

  return (
    <Box sx={{
      mt: '3vh',
      textAlign: 'center',
    }}>
      
      <UserFormComponent addUser={addUser}/>
      <UserListComponent usuarios={usuarios}/>
    </Box>          
  );
}

export default App1;
