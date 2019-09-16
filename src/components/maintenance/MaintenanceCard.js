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

                    <h4><span className="card-petname"></span>{this.props.maintenanceItems.name}</h4>
                    <p>{this.props.maintenanceItems.title}</p>
                    <p>{this.props.maintenanceItems.details}</p>
                    <p>{this.props.maintenanceItems.parts}</p>
                    {/* not sure how or where to send content below, yet */}
                    {/* <Link to={`/maintenanceItems/${this.props.maintenanceItem.id}`}><button>Details</button></Link> */}
                    {/* I want to move these buttons to the details page */}
                    <button type="button"
                        onClick={() => { this.props.history.push(`/maintenanceItems/${this.props.maintenanceItems.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteItem(this.props.maintenancetems.id)}>Delete
                    Item</button>

                </div>
            </div>

        );
    }
}

export default MaintenanceCard;