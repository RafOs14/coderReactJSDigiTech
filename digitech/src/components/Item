import { Container, Col, Row, Card, CardImg} from "react-bootstrap";
import ItemCount from "./ItemCount";

export default function Item ({ id, title, stock, cost, brand, image }) {

    return (     
        <div>
            <Container className="mt-3"> 
                <Row> 
                    <Col md={5}>
                        <Card key={id}>
                            <CardImg top width="100%" src={image} alt="Card image cap" />
                            <Card.Body>
                                <Card.Title className="text-center font-weight-bolder" style={{ color : 'blue'}}>{title}</Card.Title>
                                <Card.Subtitle className="text-center font-weight-bolder" style={{ color : 'red' }}>USD: {cost}</Card.Subtitle>
                                <Card.Text className="text-center"></Card.Text>
                                <Card.Text className="text-center">Brand: {brand}</Card.Text>                                
                                <ItemCount />
                                <Card.Text className="text-center mt-2">Stock: {stock}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>  
        </div>
    );
}
