
import React, { Component } from 'react';
import MaintenanceManager from '../../modules/MaintenanceManager';

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
                // .......// get the maint on the item
                this.setState({
                    itemId: item.itemId,
                    name: item.name,
                    year: item.year,
                    model: item.model,
                    //image maybe
                    maintenanceItem: item.maintenanceItems,
                    loadingStatus: false
                });
                console.log('line 36', item)
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
                <p>Image: {this.state.image}</p>
                <h1>{this.state.year} {this.state.name} {this.state.model}</h1>

                <div className="card">

                    {this.state.maintenanceItem.map(item =>
                        <div key={item.id} className="card-content">
                        
                            <p> {item.date}</p>
                            <p>Maintenance: {item.title}</p>
                            <p>Details: {item.details}</p>
                            <p>Parts: {item.parts}</p>

                            <button type="button" disabled={this.state.loadingStatus} onClick={()=>this.handleDelete(item.id)}>Delete Maintenance</button>
                        </div>
                    )}

                </div>

            </>
        );
    }
}

export default ItemDetails;