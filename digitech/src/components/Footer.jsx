import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 " style={{background: "black", color: "white"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12" className="footer-copyright text-center py-3" >
            &copy; {new Date().getFullYear()} Copyright: <Link to="/"> Digitech </Link>
          </MDBCol>  
        </MDBRow>
      </MDBContainer>      
    </MDBFooter>
  );
}

//export the component Footer
export default Footer;