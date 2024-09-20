import './App.css';
import { Box } from '@mui/joy';
import { useState } from 'react';
import NavbarComponent from './components/PageMain/NavbarComponent';
import AppMain from './components/PageMain/AppMain'; // Página principal
import App1 from './components/Page1/App1'; // Página 1
import App2 from './components/Page2/App2'; // Página 2
import App3 from './components/Page3/App3'; // Página 3

function App() {
  // Estado para controlar el componente actual
  const [activeComponent, setActiveComponent] = useState('PageMain');

  // Función para renderizar el componente según el estado activo
  const renderComponent = () => {
    switch (activeComponent) {
      case 'App1':
        return <App1 />;
      case 'App2':
        return <App2 />;
      case 'App3':
        return <App3 />;
      default:
        return <AppMain />;
    }
  };

  return (
    <Box
      className="App"
      sx={{
        backgroundColor: 'lightgray',
      }}
    >
      {/* Pasamos setActiveComponent como prop a NavbarComponent */}
      <NavbarComponent setActiveComponent={setActiveComponent} />
      

      {/* Aquí se muestra el componente actual */}
      <div className="component-container">
        {renderComponent()}
      </div>
    </Box>
  );
}

export default App;
