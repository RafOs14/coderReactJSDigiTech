import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CheckOut = () => {
  //Montamos este componente luego de que se agrego un producto al carrito
    return (
        <Link to='/cart' style={{textDecoration: "none"}}><Button variant="success" size="lg">CheckOut <ShoppingCartOutlined style={{color : "white"}}/></Button></Link>
  );
}

export default CheckOut;
