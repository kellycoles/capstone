
import React, { Component } from 'react';
import MaintenanceManager from '../../modules/MaintenanceManager';
import NavBar from "../site-nav/NavBar"
import "../item/ItemList.css"

class ItemDetails extends Component {

    state = {
        itemId: "",
        name: "",
        year: "",
        model: "",
        maintenanceItem: [],
        loadingStatus: true,
    }

    componentDidMount() {
        MaintenanceManager.getAllMaintenceItem(this.props.itemId)
            .then((item) => {
                item.maintenanceItems.sort((a, b) => (a.date < b.date) ? 1 : -1)       
                this.setState({
                    name: item.name,
                    year: item.year,
                    model: item.model,
                    maintenanceItem: item.maintenanceItems,
                    loadingStatus: false
                });
console.log(item)
            });
    }

    handleDelete = (id) => {
        this.setState({ loadingStatus: true })
        MaintenanceManager.deleteMaintenanceItem(id)
            .then(() => this.componentDidMount())
    }

    render() {
        return (
            <>
             <NavBar />
                <h1 className="center">Maintenance History: {this.state.year} {this.state.model} {this.state.name}</h1>
                <button type="button" className="button"
                    onClick={() => { this.props.history.push(`/maintenanceItems/${this.props.itemId}/new`) }}>Add Maintenance
                </button>
                <div className="card-container"> 
                    {this.state.maintenanceItem.map(maintItem =>
                        <div key={maintItem.id} className="card">
                           
                            <p><span className="strong">Date:</span> {maintItem.date}</p>
                            <p><span className="strong">Maintenance:</span> {maintItem.title}</p>
                            <p><span className="strong">Details:</span> {maintItem.details}</p>
                            <p><span className="strong">Parts:</span> {maintItem.parts}</p>

                            <button type="button"
                                onClick={() => { this.props.history.push(`/maintenanceItems/${maintItem.id}/edit`) }}>Edit Maintenance</button>

                            <button type="button"
                                disabled={this.state.loadingStatus} onClick={() => { if (window.confirm('Delete the item?')) this.handleDelete(maintItem.id) }}>Delete Maintenance</button>
                        </div>
                    )}

                </div>

            </>
        );
    }
}

export default ItemDetails;