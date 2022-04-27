import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Row, Container, Button, Col, Card, CardImg } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import swal from 'sweetalert';
import db from '../utils/firebase';


const Cart = () => {
    //We get the cart from the context
    const cart = useContext(CartContext);

    const order = () => {
        //Put the items in the cart
        const items = cart.cartItems.map(item => ({
            id: item.itemId,
            title: item.itemName,
            price: item.itemPrice,
            cant: item.itemCant
        }));

        
        cart.cartItems.forEach(async (item) => {
            const itemRf = doc(db, "products", item.itemId);
            await updateDoc(itemRf, {
                stock: increment(-item.itemCant)
            });
        });

        //Create the order
        let orderInProgress = {
            client: {
                name: "Juan",
                email: "rafaellacuesta14@gmail.com",
                phone: "123456789"
            },
            total: cart.total(),
            items: items,
            date: serverTimestamp()
        };

        //Save the order
        const createOrder = async () => {
            const newOrder = doc(collection(db, "orders"));
            await setDoc(newOrder, orderInProgress);
            return newOrder;
        };

        createOrder()
            .then(result => swal("Order created", `The order with the id: ${result.id} has been created, save the id to track it`, "success"))
            .catch(error => swal("Error", `Error creating the order: ${error}`, "error"));   

        cart.emptyCart();
    }

    //Function that validate if the user want to remove an item from the cart
    const remove = () => {
        swal({
            title: "¿Are you sure to remove item?",
            text: "You won't be able to revert this!",
            icon: "warning",
            buttons: true,  
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                cart.cartItems.forEach(async (item) => {
                    cart.removeFromCart(item.itemId)
                });
                swal("Poof! Item deleted!", {
                    icon: "success",
                });
            }
        });
    }
    //Function that validate if the user want to empty the cart
    const empty = () => {
        swal({
            title: "Are you sure to empty cart?",
            text: "You won't be able to revert this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                cart.emptyCart();
                swal("Poof! Cart is empty!", {
                    icon: "success",
                });
            }
        });
    }



    return(
        <Container className="mt-3">
            <Row>
                <Col sm={10}><h1 >Cart</h1></Col>
                <Col sm={2}><Link to='/'><Button variant="outline-primary" className="align-items-right"> Continue Shopping</Button></Link></Col>
            </Row>            
            <hr/>
            {
                //Si el carrito esta vacio mostramos un mensaje de que no hay productos en el carrito, sino mostramos el boton de vaciar el carrito
                cart.cartItems.length > 0 
                ? <Button variant="danger" onClick={empty}>Empty Cart</Button>
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
                                                <span className="fw-bold">Subtotal: ${cart.subTotal()}</span>
                                            </Card.Text>
                                            <Button variant="outline-danger" onClick={remove}>Remove</Button>                                            
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
                            <h3 className="text-center fw-bold">Order Summary</h3>
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
                            <Button variant="outline-primary" onClick={order}> CheckOut </Button>
                        </Card.Footer>                                
                    </Card>
                </Col>                      
            </Row>            
        </Container>
    )
}

export default Cart;
