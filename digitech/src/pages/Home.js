import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';

const  Home = () => {
  return (
    <div className="App"> 
      {/*Importamos el componente NavBar, el cual renderiza el navbar*/}
        <NavBar />
    {/*Importamos el componente ItemListContainer, el cual renderiza el cuerpo*/}
        <ItemListContainer greeting = "Proximamente" />
    </div>
  );
}

export default Home;