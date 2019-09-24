import React, { Component } from "react"
import MaintenanceManager from "../../modules/MaintenanceManager"
import ItemsManager from "../../modules/ItemsManager"

class MaintenanceEditForm extends Component {
    //set the initial state
    state = {

        title: "",
        details: "",
        parts: "",
        date: "",
        item: {},
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingItem = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });

        const editedItem = {
            id: this.props.match.params.itemId,
            title: this.state.title,
            details: this.state.details,
            parts: this.state.parts,
            date: this.state.date,
            itemId: parseInt(this.state.itemId)
        };
      
        MaintenanceManager.updateMaintenanceItem(editedItem)
            .then(() => this.props.history.push("/maintenanceItems"))
    }

    //Below are the fields that populate the edit form
    componentDidMount() {
        ItemsManager.getItems()
            .then(item => this.setState({
                item
            }))


        MaintenanceManager.getItem(this.props.match.params.itemId)
            .then(item => {
                this.setState({

                    title: item.title,
                    details: item.details,
                    parts: item.parts,
                    date: item.date,
                    itemId: parseInt(item.itemId),
                    loadingStatus: false,
                });
              
            });
    }

    render() {
        return (
            <>
                <h1 className="center card">Edit Maintenance Form</h1>
                <form>
                    <h2>Edit maintenance on the {this.state.item.name}.</h2>

                    <fieldset>
                        <div className="formgrid">

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="title"
                                value={this.state.title}
                            />
                            <label htmlFor="title">Title</label>

                            <textarea value={this.state.value}
                                onChange={this.handleFieldChange}
                                id="details"
                            />
                            <label htmlFor="details">Details:</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="parts"
                                value={this.state.parts}
                            />
                            <label htmlFor="parts">Parts</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                            />
                            <label htmlFor="date">Date:</label>

                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingItem}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default MaintenanceEditForm