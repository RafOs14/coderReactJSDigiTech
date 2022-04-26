//Componente que dibuja el cuerpo de la pagina
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestoreData } from "../utils/firestoreData";

//Componente que contiene a los artículos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    const { idCategory } = useParams();

    //Cargamos los productos desde Firebase
    useEffect(() => {        
        getFirestoreData(idCategory)
        //Si se obtiene correctamente
            .then(result => setProductos(result))
        //Si se recibe un error, mostramos un mensaje de error
            .catch(error => console.log(error));                   
    }, [idCategory]);  


    //Retornamos el componente con los parámetros
    return (               
        <ItemList items={datos} />           
    );          
}

//Exportamos el componente
export default ItemListContainer;
