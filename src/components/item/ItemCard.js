import React, { Component } from 'react';

//=======================================================
// Check classNames they are still animal
//===================================================
class ItemCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Category: {this.props.item.type}</h3>  
                    <h4><span className="card-petname"></span>{this.props.item.name}</h4>
                    <p>Year: {this.props.item.year}</p>
                    <p>Model: {this.props.item.model}</p>
                   <p>Notes: {this.props.item.notes}</p> 
                   <p>Image: {this.props.item.image}</p>
                   <p>Manual: {this.props.item.manual}</p>
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