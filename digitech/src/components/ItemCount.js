import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Add, Remove } from '@material-ui/icons'

//Declaramos la funcion y lo que se va a renderizar
export default function ItemCount ({stock, initial, onAdd}) { 
        //Declaramos el estado de la cantidad de items  
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            setCount(initial);
        }, []);

        //Funcion que se ejecuta cuando se hace click en el boton de restar
        const remove = () => {
            if(count > initial){
                setCount(count - 1);
            }
        }
        //Funcion que se ejecuta cuando se hace click en el boton de sumar
        const add = () => {
            if(count < stock){
                setCount(count + 1);
            }
        }
        //Retornamos el componente
        return (
            <div className="d-grid gap-2">
                <div className="mx-4 text-center">
                    <Button variant="outline-danger" size="sm" onClick={remove}><Remove /></Button>
                        <span className="mx-3">Cantidad: {count} unidades.</span>
                    <Button variant="outline-success" size="sm" onClick={add}><Add /></Button>
                </div>                        
                <div className="d-grid gap-2 mt-2">
                    {/*Mostramos el boton de agregar al carrito, si el producto no tiene stock, lo deshabilitamos*/}
                    {
                        stock
                        ?<Button variant="primary" size="lg" onClick={() => onAdd(count)}>Add to Cart</Button>
                        :<Button variant="danger" size="lg" disabled>Out of Stock</Button>
                    }                         
                </div>
            </div>
        );    
}