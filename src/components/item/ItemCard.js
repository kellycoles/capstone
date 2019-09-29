import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ItemList.css"

class ItemCard extends Component {
    render() {
        return (
            <>
                <div className="card-container">
                    <div className="card">
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.year} {this.props.item.model}</p>
                        <p><span className="strong">Notes:</span>  {this.props.item.notes}</p>
                        <p><span className="strong">Manual:</span> <a href={this.props.item.manual}>{this.props.item.manual}</a></p>
                        <Link to={`/maintenanceItems/${this.props.item.id}/new`}><button>Add Maintenance</button></Link>
                        <Link to={`/items/${this.props.item.id}`}><button>Maintenance Details</button></Link>
                        <button type="button"
                            onClick={() => { this.props.history.push(`/items/${this.props.item.id}/edit`) }}>Edit Item</button>
                        <button type="button" onClick={() => { if (window.confirm('Delete the item?')) this.props.deleteItem(this.props.item.id) }}>Delete Item</button>

                    </div>
                </div>
            
            </>
        );
    }
}

export default ItemCard