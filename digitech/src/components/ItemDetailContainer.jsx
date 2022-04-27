import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getFirestoreDataById } from "../utils/firestoreData";

const ItemDetailContainer = () => {
    const [datos, setProductos] = useState({});
    const { idItem } = useParams();

    //Show the product from the database
    useEffect(() => {
        //Get the product from the database
        getFirestoreDataById(idItem, "products")
        //if the product exists, show it
            .then(result => setProductos(result))
        //if the product does not exist, show an error
            .catch(error => console.log(error));
    }, [idItem]);

        //Return the component
        return (               
            <ItemDetail item={datos} />           
        );          
}

//Export the component
export default ItemDetailContainer;
