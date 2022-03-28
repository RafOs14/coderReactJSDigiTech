//Realizamos los imports correspondientes, entre ellos los distintos componentes que arman la app
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App"> 
      //Importamos el componente NavBar, el cual renderiza el navbar
        <NavBar />
    //Importamos el componente ItemListContainer, el cual renderiza el cuerpo
        <ItemListContainer greeting = "Proximamente"/> 
    </div>
  );
}

export default App;
