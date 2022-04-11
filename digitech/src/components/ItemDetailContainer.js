//Componente que dibuja el cuerpo de la pagina
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
const {products} = require('../utils/products');

const ItemDetailContainer = () => {
    const [datos, setProductos] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {
        //Obtenemos los productos con una promesa
        customFetch(3000, products.find(item => item.id === parseInt(7)))
            .then(result => setProductos(result))
            .catch(error => console.log(error));
        }, [datos]);

        return (               
            <ItemDetail item={datos} />           
        );          
}

//Exportamos el componente
export default ItemDetailContainer;
