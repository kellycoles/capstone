import React, { Component } from "react"
import MaintenanceManager from "../../modules/MaintenanceManager"
import ItemsManager from "../../modules/ItemsManager"

class MaintenanceEditForm extends Component {
    //set the initial state
    state = {
        name: "",
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
            name: this.state.name,
            model: this.state.model,
            year: this.state.year,
            itemId: parseInt(this.state.item.id)
        };

        MaintenanceManager.updateMaintenanceItem(editedItem)
            .then(() => this.props.history.push("/maintenanceItems"))
    }
    //Below are the fields that populate the edit form
    componentDidMount() {
        ItemsManager.getItems()
            .then(items => this.setState({ items }))


        MaintenanceManager.getItem(this.props.match.params.item.id)
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
                <form>
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
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="details"
                                value={this.state.details}
                            />
                            <label htmlFor="details">Details</label>

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