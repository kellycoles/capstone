import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./ItemList.css"

class ItemCard extends Component {
    render() {
        return (
    
                    <div className="card">
                        <h3>{this.props.item.name}</h3>
                        <p>{this.props.item.year} {this.props.item.model}</p>
                        <p><span className="strong">Notes:</span>  {this.props.item.notes}</p>
                        <p><span className="strong">Manual:</span> <span className="manual"><a href={this.props.item.manual}target ="_blank">{this.props.item.manual}</a></span></p>
                        <div className="btn-wrapper">
                            <Link to={`/maintenanceItems/${this.props.item.id}/new`}><button className="card-btn">Add Maintenance</button></Link>
                            <Link to={`/items/${this.props.item.id}`}><button className="card-btn">Maintenance Details</button></Link>
                            <button type="button" className="card-btn"
                                onClick={() => { this.props.history.push(`/items/${this.props.item.id}/edit`) }}>Edit Item</button>
                            <button type="button" className="card-btn" onClick={() => { if (window.confirm('Delete the item?')) this.props.deleteItem(this.props.item.id) }}>Delete Item</button>
                        </div>
                    </div>
            

        );
    }
}

export default ItemCard