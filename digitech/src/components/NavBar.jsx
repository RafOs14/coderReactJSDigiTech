import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavBar = () => {
        //Return de navbar
        return ( 
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand gap={2}><Link to='/' style={{textDecoration: "none", color: "white"}}>
                        <img alt="" src={logo} width="40" height="30" className="d-inline-block align-top" /> DigiTech </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*Links to categories*/}
                        <Nav.Link><Link to='/category/1' style={{textDecoration: "none", color: "white"}}>Computer</Link></Nav.Link>
                        <Nav.Link><Link to='/category/2' style={{textDecoration: "none", color: "white"}}>Video Games</Link></Nav.Link> 
                        <Nav.Link><Link to='/category/3' style={{textDecoration: "none", color: "white"}}>Cell Phones</Link></Nav.Link>        
                    </Nav>                   
                    <Nav className="mx-4">
                        <Nav.Link to='/'>Register</Nav.Link>
                        <Nav.Link to='/'>Sign In</Nav.Link> 
                        <Nav.Link to='/'>Sign Up</Nav.Link>                         
                    </Nav>   
                    {/*Link to cart*/}                 
                    <Link to='/cart' style={{textDecoration: "none", color: "white"}}><CartWidget /></Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        );    
}

//Exportamos el componente
export default NavBar;
