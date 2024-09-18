import { useState } from 'react';
import UserFormComponent from './UserFormComponent'
import UserListComponent from './UserListComponent';

function App1() {
  const [usuarios, setUsuarios] = useState([]);

  const addUser = (nuevoUsuario) => {
    setUsuarios(prevUsuarios => [...prevUsuarios, nuevoUsuario]);
  };

  return (
    <div className="text-center font-sans bg-darkslateblue min-h-[640px]">
      
      <UserFormComponent addUser={addUser}/>
      <UserListComponent usuarios={usuarios}/>
    </div>          
  );
}

export default App1;
