import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Add, Remove } from '@material-ui/icons'

//Declaramos la clase y lo que se va a renderizar
export default function ItemCount ({stock, initial, onAdd}) { 
        //Declaramos el estado de la cantidad de items  
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            setCount(initial);
        }, [initial]);
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
           <Card.Text className="text-center">
               <Button variant="outline-danger" size="sm" onClick={remove}><Remove /></Button>
                <span className="mx-5">{count}</span>
                <Button variant="outline-success" size="sm" onClick={add}><Add /></Button>
                <hr></hr>
                {
                    stock
                    ?<Button variant="primary" size="lg" onClick={() => onAdd(count)}>Add to Cart</Button>
                    :<Button variant="danger" size="lg" disabled>Out of Stock</Button>
                }
           </Card.Text>
           
        );    
}
