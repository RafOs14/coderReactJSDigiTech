import React, {Component} from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";
import {Badge} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

class CartWidget extends React.Component{
    render(){
        return (

            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined style={{color : "white"}}/>
            </Badge>
        );
    }
}

export default CartWidget;

