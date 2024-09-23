import './App.css';
import { Box, CssBaseline } from '@mui/joy';
import { useState } from 'react';
import NavbarComponent from './components/PageMain/NavbarComponent';
import FooterComponent from './components/PageMain/FooterComponent';
import AppMain from './components/PageMain/AppMain';
import App1 from './components/Page1/App1';
import App2 from './components/Page2/App2';
import App3 from './components/Page3/App3';

function App() {
  const [activeComponent, setActiveComponent] = useState('PageMain');
  const [themeMode, setThemeMode] = useState('light');

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
        backgroundColor: themeMode === 'light' ? 'white' : '#7c7c7c',
        color: themeMode === 'light' ? 'black' : 'white',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: '10vh'
      }}
    >
      <CssBaseline />
      
      {/* Navbar */}
      <NavbarComponent 
        setThemeMode={setThemeMode} 
        themeMode={themeMode} 
        setActiveComponent={setActiveComponent} 
      />
      
      {/* Contenido principal */}
      <Box
        sx={{
          flexGrow: 1,
          paddingBottom: '10vh', // Espacio para el footer
        }}
      >
        {renderComponent()}
      </Box>

      {/* Footer fijo */}
      <footer>
        <FooterComponent themeMode={themeMode} />
      </footer>
    </Box>
  );
}

export default App;
