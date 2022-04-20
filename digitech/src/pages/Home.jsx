import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import CartContextProvider from '../context/CartContext';

const  Home = () => {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} /> 
            <Route path='/cart' element={<Cart />} />         
          </Routes>
        </BrowserRouter>       
      </CartContextProvider>
  );        
}
//Exportamos el componente
export default Home;