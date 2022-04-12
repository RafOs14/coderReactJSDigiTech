import ItemCount from "./ItemCount";
import { useState } from "react";
import { Col, Container, Card, CardImg, Row, Button } from "react-bootstrap";
import { CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@material-ui/icons";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    //Mostramos una alerta al agregar los items
    const onAdd = (sum) => {
        alert(`${sum} items added to cart`);
        setItemCount(sum);
    }

    return( 
        //Mostramos los detalles del producto 
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
                                    {   itemCount === 0
                                        ?<ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="primary" size="lg">CheckOut <ShoppingCartOutlined style={{color : "white"}}/></Button></Link>
                                    }
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

//Exportamos el componente
export default ItemDetail;