//Componente que crea un navbar
import boostrap from "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
        /*Retornamos lo que va a mostrar el componente principal*/
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid mx-2">
                    <img src={logo} alt="logo" className="navbar-brand" />
                    <a className="navbar-brand" href="#">DigiTech</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Computer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Video Games</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Cell Phones</a>
                        </li>                                                 
                    </ul>
                    <form className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Register</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Sing In</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Sing Up</a>
                            </li>                                                 
                        </ul>                        
                    </form>
                    <CartWidget />
                    </div>
                </div>
        </nav>
        );    
}

//Exportamos el componente
export default NavBar;
