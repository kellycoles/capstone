import React, { Component } from 'react';
import { Link } from "react-router-dom";

//=======================================================
// Check classNames they are still animal
//===================================================
class ItemCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {/*filter by category */}

                       {/* <picture>
                    </picture> */}
                    {/* I want the category to be displayed differently than the way is is in the database ie lawn Lawn & Garden */}
                    <h3>Category: {this.props.item.category.type}</h3>  
                    <h4><span className="card-petname"></span>{this.props.item.name}</h4>
                    <p>{this.props.item.year} {this.props.item.model}</p>
                     <p>Notes: {this.props.item.notes}</p>
                    <p>Manual: {this.props.item.manual}</p>
                    <Link to={`/maintenanceItems/${this.props.item.id}/new`}><button>Add Maintenance</button></Link>
                    <Link to={`/items/${this.props.item.id}`}><button>Maintenance Details</button></Link>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/items/${this.props.item.id}/edit`) }}>Edit Item</button>
                    <button type="button" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete Item</button>

                </div>
            </div>

        );
    }
}

export default ItemCard;