import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const  Home = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <ItemDetailContainer />        
      </BrowserRouter>       
  );
        
}

export default Home;
