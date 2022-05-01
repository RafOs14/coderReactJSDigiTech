import { useEffect, useState } from "react";
import { Add, Remove } from '@material-ui/icons'
import { Row, Container, Button } from "react-bootstrap";

//Function to add an item to the cart
export default function ItemCount ({stock, initial = 0, onAdd}) { 
        //Declare the state of the component 
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            setCount(initial);
        }, []);

        //Rest quantity of items
        const remove = () => {
            if(count > initial){
                setCount(count - 1);
            }
        }
        //Add quantity of items
        const add = () => {
            if(count < stock){
                setCount(count + 1);
            }
        }

        //Return the component
        return (
            <Container className="d-grid gap-2">
                <Row className="mx-5 text-center">
                    <Button variant="outline-danger" size="sm" onClick={remove}><Remove /></Button>
                        <span className="mx-2">Quantity: {count} unities.</span>
                    <Button variant="outline-success" size="sm" onClick={add}><Add /></Button>
                </Row>                        
                <Container className="d-grid gap-2 mt-2">
                    {/*We Show Add to cart button, if the quantity is 0 the button is disable */}
                    {
                        stock && count
                        ?<Button variant="primary" size="sm" onClick={() => onAdd(count)}>Add to Cart</Button>
                        :<Button variant="danger" size="sm" disabled>Add to Cart</Button>
                    }                         
                </Container>
            </Container>
        );    
}
