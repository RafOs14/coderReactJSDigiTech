import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Add, Remove } from '@material-ui/icons'

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
            <div className="d-grid gap-2">
                <div className="mx-4 text-center">
                    <Button variant="outline-danger" size="sm" onClick={remove}><Remove /></Button>
                        <span className="mx-2">Quantity: {count} unities.</span>
                    <Button variant="outline-success" size="sm" onClick={add}><Add /></Button>
                </div>                        
                <div className="d-grid gap-2 mt-2">
                    {/*Mostramos el boton de agregar al carrito, si el producto no tiene stock, lo deshabilitamos*/}
                    {
                        stock && count
                        ?<Button variant="primary" size="md" onClick={() => onAdd(count)}>Add to Cart</Button>
                        :<Button variant="danger" size="md" disabled>Add to Cart</Button>
                    }                         
                </div>
            </div>
        );    
}
