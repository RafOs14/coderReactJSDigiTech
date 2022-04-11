import ItemCount from "./ItemCount";
import { Col, Container, Card, CardImg, Row } from "react-bootstrap";
import React from "react";
import { CardContent } from "@material-ui/core";

const ItemDetail = ({ item }) => {

    //Mostramos una alerta al agregar los items
    const onAdd = (items) => {
        alert(`${items} items added to cart`);
    }

    return(                 
        <>
        {item && item.image
            ?               
        <Container className="mt-3">
            <Row>
                <Col sm={4}>
                    <CardImg top width="100%" src={item.image} alt="" />
                </Col>
                <Col sm={8}>
                    <Card style={{ width : 'auto' }}>
                        <Card.Header className="text-center font-weight-bolder" style={{ color : 'blue'}}>{item.name}</Card.Header>
                        <Card.Body> 
                            <Card.Text className="font-weight-bolder"> {item.description}</Card.Text>                     
                            <Card.Text className="fs-3 fw-bold" style={{ color : 'red' }}>USD: {item.price}</Card.Text>                                                       
                            <CardContent className="align-items-right">
                                <Row>
                                    <Col>
                                        <Card.Text className="text-center">Brand: {item.brand}</Card.Text>
                                        <Card.Text className="text-center mt-2">Stock en depósito: {item.stock}</Card.Text>
                                    </Col>
                                    <Col>
                                         <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                                    </Col>
                                </Row>
                            </CardContent>
                        </Card.Body>
                    </Card>
                </Col>                    
            </Row>
        </Container> 
        : <div className="text-center mt-3">Products will be displayed in an instant...</div>
        }    
        </>        
    );
}

export default ItemDetail;
