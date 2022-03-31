//Componente que dibuja el cuerpo de la pagina
import boostrap from "bootstrap/dist/css/bootstrap.css";
import ItemCount from "./ItemCount";

//Componente que contiene a los artículos
const ItemListContainer = ({greeting}) => {
    //Mostramos una alerta al agregar los items
    const onAdd = (items) => {
        alert(`${items} items added to cart`);
    }

        return (  
            <div className="container mt-2">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title ">Products</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-responsive">
                                            {/*Utilizamos las props declaradas en el componente App.js*/}
                                            {greeting}
                                            {/*Llamamos al componente ItemCount y le pasamos dos parametros*/}                                           
                                            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
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
