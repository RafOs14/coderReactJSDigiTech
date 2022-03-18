//Componente que crea un navbar
import React, {Component} from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/logo.png";

class NavBar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">  
                    <img src={logo} alt="logo" className="logo" />   
                    <a><span class="fw-bold h4 text-white mx-3">DigiTech</span></a>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Informatica</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Telefonía</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Video Juegos</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;