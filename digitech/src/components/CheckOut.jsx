import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//Component to go to the checkout
const CheckOut = () => {
  //Mount the component after the user click on the button add to cart
    return (
        <>
          {/*Go back to cart */}
          <Link to='/cart' style={{textDecoration: "none"}}><Button variant="outline-success" size="md">CheckOut</Button></Link>
          &nbsp;
          {/*Return to Products*/}
          <Link to='/'><Button variant="outline-primary" className="align-items-right" size="md"> Continue Shopping</Button></Link>
        </>
  );
}
//Export the component
export default CheckOut;
