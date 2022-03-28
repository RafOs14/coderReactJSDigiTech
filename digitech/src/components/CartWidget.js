//Componente que dibuja el icono del carrito, el cual se usara en el navbar
import React, {Component} from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";
import {Badge} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

//Declaramos la clase y lo que se va a renderizar
class CartWidget extends React.Component{
    render(){
        return (

            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined style={{color : "white"}}/>
            </Badge>
        );
    }
}

//Exportamos el componente
export default CartWidget;

