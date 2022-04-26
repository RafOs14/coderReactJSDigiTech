//Componente que dibuja el cuerpo de la pagina
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getFirestoreDataById } from "../utils/firestoreData";

const ItemDetailContainer = () => {
    //Obtenemos el id del producto
    const [datos, setProductos] = useState({});
    const { idItem } = useParams();

    //Mostramos el producto desde Firebase
    useEffect(() => {
        //Obtenemos el producto de la bd
        getFirestoreDataById(idItem, "products")
        //Si se obtiene correctamente
            .then(result => setProductos(result))
        //Si no se obtiene correctamente
            .catch(error => console.log(error));
    }, [idItem]);

        //Retornamos el componente con los parámetros
        return (               
            <ItemDetail item={datos} />           
        );          
}

//Exportamos el componente
export default ItemDetailContainer;
