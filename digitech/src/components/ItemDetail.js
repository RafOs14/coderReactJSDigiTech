import ItemCount from "./ItemCount";
import { Container, Card, CardImg } from "react-bootstrap";
import React from "react";

const ItemDetail = ({ id, title, stock, cost, brand, image }) => {

    //Mostramos una alerta al agregar los items
    const onAdd = (items) => {
        alert(`${items} items added to cart`);
    }

    return(
        <>               
            <Container className="mt-3">
                <Card style={{ width : 'auto' }}>
                    <CardImg top width="100%" src={image} alt="" />
                    <Card.Body>
                        <Card.Title className="text-center font-weight-bolder" style={{ color : 'blue'}}>{title}</Card.Title>
                        <Card.Subtitle className="text-center font-weight-bolder" style={{ color : 'red' }}>USD: {cost}</Card.Subtitle>
                        <Card.Text className="text-center"></Card.Text>
                        <Card.Text className="text-center">Brand: {brand}</Card.Text>
                        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>                            
                        <Card.Text className="text-center mt-2">Stock: {stock}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default ItemDetail;
