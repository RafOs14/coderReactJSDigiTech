//Componente que dibuja el cuerpo de la pagina
import boostrap from "bootstrap/dist/css/bootstrap.css";
import {Button, Wrapper} from "react-bootstrap";
import ItemCount from "./ItemCount";
import cougar from "../assets/cougar.jpg";


//Declaramos la clase que va a renderizar el componente y recibir las props
const ItemListContainer = ({greeting}) => {
    //Declaramos el estado de la cantidad de items    
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
                                            {greeting}
                                            {/*Llamamos al componente ItemCount y le pasamos dos parametros*/}
                                            <ItemCount />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        );          
}

//Exportamos el componente
export default ItemListContainer;
