import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';
import Register from '../components/Register';
import Login from '../components/Login';
import Footer from '../components/Footer';
import CartContextProvider from '../context/CartContext';

const  Home = () => {
  //We get the context
  return (
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:idCategory' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} /> 
            <Route path='/cart' element={<Cart />} /> 
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />                    
          </Routes>
          <Footer />
        </BrowserRouter>       
      </CartContextProvider>
  );        
}
//Export the component
export default Home;
