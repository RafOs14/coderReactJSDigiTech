import { Container, Row } from "react-bootstrap";
import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <Container flex>  
            <Row>                    
                { 
                    //Recorremos el arreglo de productos para mostrarlo en pantalla
                    items.length > 0
                    ?items.map(item => <Item key={item.id} id={item.id} title={item.description} cost={item.price} brand={item.brand} image={item.image[0]} stock={item.stock} />)
                    : <div className="text-center mt-3">Products will be displayed in an instant...</div>                    
                } 
            </Row>
        </Container>
    );
}

export default ItemList;
