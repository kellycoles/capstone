import React, { Component } from 'react';

class MaintenanceCard extends Component {
    render() {
        return (
            <>
                <div className="card-container">
                    <div className="card">
                        <h3>{this.props.item.name}</h3>
                        <p><span className="strong">Maintenance:</span> {this.props.item.title}</p>
                        <p><span className="strong">Details:</span> {this.props.item.details}</p>
                        <p><span className="strong">Parts:</span> {this.props.item.parts}</p>
                        <p><span className="strong">Date:</span> {this.props.item.date}</p>
                        <button type="button"
                            onClick={() => { this.props.history.push(`/maintenanceItems/${this.props.item.id}/edit`) }}>Edit Maintenance</button>
                        <button type="button" onClick={() => { if (window.confirm('Delete the item?')) this.props.deleteItem(this.props.item.id) }}>Delete Maintenance
                    Item</button>

                    </div>
                </div>
            </>
        );
    }
}

export default MaintenanceCard;