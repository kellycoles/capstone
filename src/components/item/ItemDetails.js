
import React, { Component } from 'react';
import ItemsManager from '../../modules/ItemsManager';

class ItemDetails extends Component {

    state = {
        categoryId: "", //need type array?
        name: "",
        year: "",
        model: "",
        image: "",              
        notes: "",
        loadingStatus: true,
    }

    componentDidMount() {
        ItemsManager.getItem(this.props.itemId)
            .then((item) => {
                // .......// get the maint on the item
                this.setState({
                    categoryId: item.categoryId,    //expand name        
                    name: item.name,
                    year: item.year,
                    model: item.model,
                    image: item.image,
                    notes: item.notes,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true })
        ItemsManager.deleteItem(this.props.itemId)            //change this to delete maintenance on item, not the item
            .then(() => this.props.history.push("/items"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                   
                    <p>Image: {this.state.image}</p>
                    {/* <picture>
                    </picture> */}
                    <h1><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h1>
                    <p> {this.state.year} {this.state.model}</p>
                    <p>Notes: {this.state.notes}</p>
                    <p>Manual: {this.state.manual}</p>
                    {/* re-code this delete to delete a maintenance*/}
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Maintenance</button>


                </div>
            </div>
        );
    }
}

export default ItemDetails;