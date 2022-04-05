//Componente que dibuja el cuerpo de la pagina
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProducts } from "../utils/products";

//Componente que contiene a los artículos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    
    useEffect(() => {
        //Obtenemos los productos con una promesa
        async function fetchData() {
            let data = await getProducts();
            setProductos(data);
            }
        fetchData();
        }, []);

        return (               
            <ItemList items={datos} />           
        );          
}

//Exportamos el componente
export default ItemListContainer;
