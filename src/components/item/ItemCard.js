import React, { Component } from 'react';

//=======================================================
// Check classNames they are still animal
//===================================================
class ItemCard extends Component {
    render() {
        return (
             <div className="card">
                <div className="card-content">
                    <h3><span className="card-petname"></span>{this.props.item.name}</h3>
                    <p>Year: {this.props.item.year}</p>
                    <p>Model: {this.props.item.model}</p>
                    <p>Notes: {this.props.item.notes}</p>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/items/${this.props.item.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteItem(this.props.item.id)}>Delete
                    Event</button>

                </div>
            </div>

        );
    }
}

export default ItemCard;