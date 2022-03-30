import boostrap from "bootstrap/dist/css/bootstrap.css";
import { Button } from "bootstrap";
import { Add, Remove } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import cougar from "../assets/cougar.jpg";


//Declaramos la clase y lo que se va a renderizar
const ItemCount = ({stock,initial,onAdd}) => {  
        return (
            <div className="d-flex">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={cougar} />
                    <Card.Body>
                        <Card.Title>Auriculares Cougar</Card.Title>
                        <Card.Text>
                            <Button variant="outlined-primary"><Add /></Button>
                            <span className="mx-5">{initial}</span>
                            <Button variant="outlined-primary"><Remove /></Button>
                        </Card.Text>
                        <Button variant="outlined-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
        );    
}

//Exportamos el componente
export default ItemCount;
