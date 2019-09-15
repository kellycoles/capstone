
import React, { Component } from 'react';
import ItemsManager from '../../modules/ItemsManager';

class ItemDetails extends Component {

    state = {
        categoryId: "",
        name: "",
        year: "",
        model: "",
        image: "",              //??? image and manual This is where I want both of them to appear
        manual: "",
        notes: "",
        loadingStatus: true,
    }

    componentDidMount() {
        ItemsManager.getItem(this.props.itemId)
            .then((item) => {
                this.setState({
                    categoryId: item.categoryId,            // category
                    name: item.name,
                    year: item.year,
                    model: item.model,
                    image: item.image,
                    manual: item.manual,
                    notes: item.notes,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true })
        ItemsManager.deleteItem(this.props.itemId)
            .then(() => this.props.history.push("/items"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {/* I want the card titile to be the category */}
                <p>Category: {}</p>
                <p>Image: {this.state.image}</p>
                    {/* <picture>
                    </picture> */}
                    <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p> {this.state.year} {this.state.model}</p>
                    <p>Notes: {this.state.notes}</p>
                    {/* this is where I want to be able to view the manual */}
                    <p>Manual: {this.state.manual}</p>
                    {/* i want to add edit here */}
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete</button>


                </div>
            </div>
        );
    }
}

export default ItemDetails;