import { useEffect, useState } from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import { Add, Remove } from '@material-ui/icons'
import { Card } from "react-bootstrap";
import cougar from "../assets/cougar.jpg";

//Declaramos la clase y lo que se va a renderizar
const ItemCount = ( {stock, initial, onAdd}) => { 
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
            <div className="d-flex">
                <Card className="shadow" style={ { width: '18rem' } }>
                    <Card.Img variant="top" src={cougar} />
                    <Card.Body>
                        <Card.Title className="text-center">Cougar HeadSet</Card.Title>
                        <Card.Text className="text-center">
                            <span className="fw-bold">Usd 150</span>
                        </Card.Text>
                        <Card.Text className="mx-4">
                            <Button variant="outline-danger" onClick={remove}><Remove /></Button>
                            <span className="mx-5">{count}</span>
                            <Button variant="outline-success" onClick={add}><Add /></Button>
                        </Card.Text>                        
                        <div className="d-grid gap-2">
                            {
                                stock
                                ?<Button variant="primary" size="lg" onClick={() => onAdd(count)}>Add to Cart</Button>
                                :<Button variant="danger" size="lg" disabled>Out of Stock</Button>
                            }
                            
                        </div>
                    </Card.Body>                   
                </Card>
            </div>
        );    
}

//Exportamos el componente
export default ItemCount;
