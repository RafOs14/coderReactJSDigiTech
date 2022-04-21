//Componente que dibuja el cuerpo de la pagina
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    //Obtenemos el id del producto
    const [datos, setProductos] = useState({});
    const { idItem } = useParams();
    
    //Cargamos los productos
    useEffect(() => {
        //Obtenemos los productos con una promesa
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setProductos(result))
            .catch(error => console.log(error));
        }, [datos]);

        //Retornamos el componente con los parámetros
        return (               
            <ItemDetail item={datos} />           
        );          
}

//Exportamos el componente
export default ItemDetailContainer;
