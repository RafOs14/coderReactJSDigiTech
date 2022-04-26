import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//Componente que nos envía al carrito o a la página de inicio
const CheckOut = () => {
  //Montamos este componente luego de que se agrego un producto al carrito
    return (
        <>
          <Link to='/cart' style={{textDecoration: "none"}}><Button variant="outline-success" size="md">CheckOut</Button></Link>
          &nbsp;
          <Link to='/'><Button variant="outline-primary" className="align-items-right" size="md"> Back to Products</Button></Link>
        </>
  );
}

export default CheckOut;
