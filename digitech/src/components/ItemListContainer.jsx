import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestoreData } from "../utils/firestoreData";

//Component that contains the products
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    const { idCategory } = useParams();

    //Show the products from the database
    useEffect(() => {        
        getFirestoreData(idCategory)
        //if the products exists, show them
            .then(result => setProductos(result))
        //if the products does not exist, show an error
            .catch(error => console.log(error));                   
    }, [idCategory]);  


    //Return the component
    return (               
        <ItemList items={datos} />           
    );          
}

//Export the component
export default ItemListContainer;
