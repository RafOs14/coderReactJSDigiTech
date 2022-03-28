import React, {Component} from "react";
import boostrap from "bootstrap/dist/css/bootstrap.css";

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
                                            {this.props.greeting}
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

export default ItemListContainer;