import { Col, Card, CardImg} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item ({ id, title, stock, cost, brand, image }) {

        //Mostramos una alerta al agregar los items
        const onAdd = (items) => {
            alert(`${items} items added to cart`);
        }

    return ( 
        <Col className="mt-3">
            <Card key={id} style={{ width : '18rem' }} >
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <Card.Body>
                    <Card.Title className="text-center font-weight-bolder" style={{ color : 'blue'}}>{title}</Card.Title>
                    <Card.Subtitle className="text-center font-weight-bolder" style={{ color : 'red' }}>USD: {cost}</Card.Subtitle>
                    <Card.Text></Card.Text>
                    <Card.Text className="text-center"><Link to={`/item/${id}`}>See Description</Link></Card.Text>
                    <Card.Text className="text-center">Brand: {brand}</Card.Text>                                                    
                    <Card.Text className="text-center mt-2">Stock: {stock}</Card.Text>
                </Card.Body>
            </Card>
        </Col>                  
    );
}