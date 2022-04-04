//Componente que crea un navbar
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
        /*Retornamos lo que va a mostrar el componente principal*/
        return ( 
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                        DigiTech
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Computer</Nav.Link>
                        <Nav.Link href="#link">Video Games</Nav.Link> 
                        <Nav.Link href="#link">Cell Phones</Nav.Link>        
                    </Nav>                   
                    <Nav className="mx-3">
                        <CartWidget />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        );    
}

//Exportamos el componente
export default NavBar;
