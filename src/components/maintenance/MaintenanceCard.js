import React, { Component } from 'react';
import "../item/ItemList.css"

class MaintenanceCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <h3>{this.props.name}</h3>
                    <p><span className="strong">Maintenance:</span> {this.props.item.title}</p>
                    <p><span className="strong">Details:</span> {this.props.item.details}</p>
                    <p><span className="strong">Parts:</span> {this.props.item.parts}</p>
                    <p><span className="strong">Date:</span> {this.props.item.date}</p>
                    <div className="btn-wrapper">
                        <button type="button" className="card-btn"
                            onClick={() => { this.props.history.push(`/maintenanceItems/${this.props.item.id}/edit`) }}>Edit Maintenance</button>
                        <button type="button" className="card-btn" onClick={() => { if (window.confirm('Delete the item?')) this.props.deleteItem(this.props.item.id) }}>Delete Maintenance
                    Item</button>
                    </div>
                </div>
            </>
        );
    }
}

export default MaintenanceCard;