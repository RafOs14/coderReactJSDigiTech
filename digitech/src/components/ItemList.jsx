import { Container, Row, Carousel} from "react-bootstrap";
import Item from "./Item";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";

const ItemList = ({ items }) => {
    return (        
            <Container>                
                <Carousel className="mt-3">
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={slide1} alt="" />                    
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={slide2} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={slide3} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={slide4} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={slide5} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={slide6} alt="" />
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img className="d-block w-100" src={slide7} alt="" />
                    </Carousel.Item>
                </Carousel>                                          
                <Row>              
                    { 
                        //Recorremos el arreglo de productos para mostrarlo en pantalla
                        items.length > 0
                        ?items.map(item => <Item key={item.id} id={item.id} title={item.name} desc={item.description} cost={item.price} brand={item.brand} image={item.image} stock={item.stock} />)
                        : <div className="text-center mt-3">Products will be displayed in an instant...</div>                    
                    }                 
                </Row>
            </Container>       
    );
}

//Exportamos el componente
export default ItemList;
