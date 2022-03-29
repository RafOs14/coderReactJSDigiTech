import React, {Component} from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";
import {Button,Card, Form} from "react-bootstrap";
import cougar from "../assets/cougar.jpg";

function ItemCount({stock, initial, onAdd}) {
  return (
    <div className="d-flex">
        <Card style={{width: '20rem'}}>
            <Card.Img variant="top" src={cougar} />
            <Card.Body>
                <Card.Title>Auriculares Cougar</Card.Title>
                <Card.Text>
                    <span className="fw-bold">Precio:</span> $1.000
                </Card.Text>
                <Card.Text>                
                    <Button variant="outline-primary" onClick={onAdd}>-</Button>
                    <span className="mx-5">{initial}</span>                
                    <Button variant="outline-primary">+</Button>                
                </Card.Text>
                <Button  variant="outline-primary" size="lg">Agregar al carrito</Button>
            </Card.Body>        
        </Card>
    </div>
  );
}
      

//Exportamos el componente
export default ItemCount;
