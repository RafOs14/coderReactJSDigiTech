import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">      
        <NavBar />
        <ItemListContainer greeting = "Proximamente"/> 
    </div>
  );
}

export default App;
