//Componente que dibuja el icono del carrito, el cual se usara en el navbar
import boostrap from "bootstrap/dist/css/bootstrap.css";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

//Declaramos la clase y lo que se va a renderizar
const CartWidget = () => {  
    const cart = useContext(CartContext);

        return (
            <Badge badgeContent={cart.itemsCant()} color="primary">
                <ShoppingCartOutlined style={{color : "white"}}/>
            </Badge>
        );    
}

//Exportamos el componente
export default CartWidget;
