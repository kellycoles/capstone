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
                    <p>{this.props.item.title}</p>
                    <p>{this.props.item.details}</p>
                    <p>{this.props.item.parts}</p>
                  
                    <button type="button"
                        onClick={() => { this.props.history.push(`/maintenanceItems/${this.props.item.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete
                    Item</button>

                </div>
            </div>

        );
    }
}

export default MaintenanceCard;