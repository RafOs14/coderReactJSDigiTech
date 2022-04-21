import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Row, Container, Button, Col, Card, CardImg } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    //Obtenemos el contexto del carrito
    const cart = useContext(CartContext);

    return(
        <Container className="mt-3">
            <Row>
                <Col sm={10}><h1 >Cart</h1></Col>
                <Col sm={2}><Link to='/'><Button variant="outline-primary" className="align-items-right"> Back to Products</Button></Link></Col>
            </Row>            
            <hr/>
            {
                //Si el carrito esta vacio mostramos un mensaje de que no hay productos en el carrito, sino mostramos el boton de vaciar el carrito
                cart.cartItems.length > 0 
                ? <Button variant="danger" onClick={cart.emptyCart}>Empty Cart</Button>
                : <h4 className="text-center mb-3" style={{ color : 'red' }}>Your cart is empty, press on back to products</h4>
            }
            <Row className="mt-4">
                <Col sm={8}>
                    {
                        //Validamos si hay productos en el carrito
                        cart.cartItems.length > 0 ?
                        //Si hay productos, mostramos una tarjeta por cada producto con la funcion map
                        cart.cartItems.map(item => ( 
                            <Row key={item.itemId}>
                                <Col sm={3} className="mt-2">
                                    <CardImg variant="top" src={item.itemImg} />
                                </Col>
                                <Col sm={9} className="mt-2">
                                    <Card>                               
                                        <Card.Body>
                                            <Card.Title>{item.itemName}</Card.Title>
                                            <Card.Text>
                                                <span><b>Price: ${item.itemPrice} / unit</b></span>                                        
                                            </Card.Text>
                                            <Card.Text>
                                                <span>Quantity: {item.itemCant}</span>
                                            </Card.Text>
                                            <Card.Text>
                                                {/*<span>Subtotal: ${cart.totalxItem()}</span>*/}
                                            </Card.Text>
                                            <Button variant="outline-danger" onClick={() => cart.removeFromCart(item.itemId)}>Remove</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        ))
                        //Si no hay productos mostramos el componente vacio
                        : ''
                    } 
                </Col> 
                {/*Mostramos el total del carrito */}
                <Col sm={4} className="mt-2">
                    <Card>
                        <Card.Title>
                            <h3 className="text-center fw-bold">Total</h3>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <span className="fw-bold">Subtotal:&nbsp;</span>
                                <span className="float-right">${cart.subTotal()}</span>
                            </Card.Text>
                            <Card.Text>
                                <span className="fw-bold">Taxes:&nbsp;</span>
                                <span className="float-right">${cart.taxes()}</span>
                            </Card.Text>
                            <Card.Text>                                        
                                <span className="fw-bold">Total:&nbsp;</span>
                                <span className="float-right">${cart.total()}</span>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Button variant="outline-primary"> Check Out </Button>
                        </Card.Footer>                                
                    </Card>
                </Col>                      
            </Row>            
        </Container>
    )
}

export default Cart;
