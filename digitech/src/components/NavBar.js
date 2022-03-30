//Componente que crea un navbar
import boostrap from "bootstrap/dist/css/bootstrap.css";
import { AppBar } from "@material-ui/core";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
        {/*Retornamos lo que va a mostrar el componente principal*/}
        return (            
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark px-5 mb-2">
                <img src={logo} alt="logo" className="logo" />                
                <a><span className="fw-bold h4 text-white mx-3">DigiTech</span></a>                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Informática</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Telefonía</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">VideoJuegos</a>
                        </li>
                    </ul>
                    <div class="d-flex">
                            <a className="nav-link link-light" href="#">Registrarse</a> 
                            <a className="nav-link link-light" href="#">Iniciar Sesión</a>
                            <CartWidget />
                    </div>
                </div>
            </nav>            
        );    
}

//Exportamos el componente
export default NavBar;
