import ItemCount from "./ItemCount";
import CheckOut from "./CheckOut";
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";
import { Col, Container, Card, CardImg, Row } from "react-bootstrap";
import { CardContent } from "@material-ui/core";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const agreggate = useContext(CartContext);

    //Mostramos una alerta al agregar los items
    const onAdd = (sum) => {
        alert(`${sum} items added to cart`);
        setItemCount(sum);
        agreggate.addToCart(item, sum);
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
                                        <Card.Text className="text-center fw-bold mt-2">Stock in storage: {item.stock}</Card.Text>
                                    </Col>
                                    <Col>
                                    {   itemCount === 0
                                        ?<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                                        :<CheckOut />
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
