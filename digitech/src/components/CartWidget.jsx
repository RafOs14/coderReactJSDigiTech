import boostrap from "bootstrap/dist/css/bootstrap.css";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

//Icon cart component
const CartWidget = () => {  
    const cart = useContext(CartContext);

        return (
            <Badge badgeContent={cart.itemsCant()} color="primary">
                <ShoppingCartOutlined style={{color : "white"}}/>
            </Badge>
        );    
}

//Export the component
export default CartWidget;
