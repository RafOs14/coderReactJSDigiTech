//Componente que crea un navbar
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "@material-ui/core";

const NavBar = () => {
        /*Retornamos lo que va a mostrar el componente principal*/
        return ( 
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Link to='/'><Navbar.Brand gap={2}>
                        <img
                        alt=""
                        src={logo}
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        DigiTech
                    </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/'>Computer</Nav.Link>
                        <Nav.Link to='/'>Video Games</Nav.Link> 
                        <Nav.Link to='/'>Cell Phones</Nav.Link>        
                    </Nav>                   
                    <Nav className="mx-4">
                        <Nav.Link to='/'>Register</Nav.Link>
                        <Nav.Link to='/'>Sign In</Nav.Link> 
                        <Nav.Link to='/'>Sign Up</Nav.Link>                         
                    </Nav>                    
                    <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        );    
}

//Exportamos el componente
export default NavBar;
