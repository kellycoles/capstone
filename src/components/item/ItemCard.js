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
                    {/* i want one category container for all items in that category */}
                    <h3>Category: {this.props.item.category.type}</h3>
                    <h4><span className="card-petname"></span>{this.props.item.name}</h4>
                    <p>{this.props.item.year} {this.props.item.model}</p>
                    <Link to={`/items/${this.props.item.id}`}><button>Details</button></Link>
                    {/* I want to move these buttons to the details page */}
                    <button type="button"
                        onClick={() => { this.props.history.push(`/items/${this.props.item.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete
                    Item</button>

                </div>
            </div>

        );
    }
}

export default ItemCard;