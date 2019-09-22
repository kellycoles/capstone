import React, { Component } from 'react';
// import { Link } from "react-router-dom";

//=======================================================
// Check classNames they are still animal
//===================================================
class MaintenanceCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {/* i want one category container for all items in that category */}

                    <h4><span className="card-petname"></span>{this.props.item.name}</h4>
                    <p>Maintenance: {this.props.item.title}</p>
                    <p>Details: {this.props.item.details}</p>
                    <p>Parts: {this.props.item.parts}</p>
                    <p>Date: {this.props.item.date}</p>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/maintenanceItems/${this.props.item.id}/edit`) }}>Edit Maintenance</button>
                    <button type="button" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete Maintenance
                    Item</button>

                </div>
            </div>

        );
    }
}

export default MaintenanceCard;