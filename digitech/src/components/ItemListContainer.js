//Componente que dibuja el cuerpo de la pagina
import React, {Component} from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";
import ItemCount from "./ItemCount";


//Declaramos la clase que va a renderizar el componente y recibir las props
class ItemListContainer extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Listado de productos</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive">
                                            {/*Utilizamos las props declaradas en el componente App.js*/}
                                            {this.props.greeting}
                                            {/*Llamamos al componente ItemCount y le pasamos dos parametros*/}
                                            <ItemCount stock="10" initial="1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );        
    };  
}


//Exportamos el componente
export default ItemListContainer;
