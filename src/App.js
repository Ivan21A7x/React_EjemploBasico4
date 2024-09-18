import { useState } from 'react';
import './App.css';
import App1 from './components/Page1/App1';
import App2 from './components/Page2/App2';
import App3 from './components/Page3/App3';
import AppMain from './components/PageMain/AppMain';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header"></header>
  //     {/* <App1 /> */}
  //     {/* <App2 /> */}
  //     {/* <App3 /> */}


  //   </div>
  // );

  // Estado para controlar el componente que se muestra
  const [activeComponent, setActiveComponent] = useState('PageMain');

  // Función para cambiar de componente
  const renderComponent = () => {
    switch (activeComponent) {
      case 'App1':
        return <App1/>;
      case 'App2':
        return <App2 />;
      case 'App3':
        return <App3 />;
      default:
        return <AppMain />;
    }
  };

  return (
    <div className="App">
      <h1>PORTAFOLIO</h1>
      
      {/* Botones para cambiar el componente */}
      <button
        className="bg-gray-500 text-white p-2 m-2"
        onClick={() => setActiveComponent('')}
      >
        Home
      </button>
      <button
        className="bg-blue-500 text-white p-2 m-2"
        onClick={() => setActiveComponent('App1')}
      >
        Mostrar Component1
      </button>
      <button
        className="bg-green-500 text-white p-2 m-2"
        onClick={() => setActiveComponent('App2')}
      >
        Mostrar Component2
      </button>
      <button
        className="bg-yellow-500 text-white p-2 m-2"
        onClick={() => setActiveComponent('App3')}
      >
        Mostrar Component3
      </button>

      {/* Aquí se muestra el componente actual */}
      <div className="component-container">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
