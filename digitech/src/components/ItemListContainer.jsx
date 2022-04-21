//Componente que dibuja el cuerpo de la pagina
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const { products } = require('../utils/products');

//Componente que contiene a los artículos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    const { idCategory } = useParams();
    
    //Cargamos los productos
    useEffect(() => {
        if (idCategory === undefined) {
            //Obtenemos los productos con una promesa
            customFetch(2000, products)
                .then(result => setProductos(result))
                .catch(error => console.log(error));
        } else {
            //Obtenemos los productos de una categoria con una promesa
            customFetch(1000, products.filter(item => item.categoryId === parseInt(idCategory)))
                .then(result => setProductos(result))
                .catch(error => console.log(error));
        }            
    }, [datos]);

        //Retornamos el componente con los parámetros
        return (               
            <ItemList items={datos} />           
        );          
}

//Exportamos el componente
export default ItemListContainer;
