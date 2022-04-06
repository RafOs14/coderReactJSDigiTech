//Componente que dibuja el cuerpo de la pagina
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../utils/products";

const ItemDetailContainer = () => {
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
            <ItemDetail items={datos} />           
        );          
}

//Exportamos el componente
export default ItemDetailContainer;