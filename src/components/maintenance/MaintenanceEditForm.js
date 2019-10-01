import React, { Component } from "react"
import MaintenanceManager from "../../modules/MaintenanceManager"
import ItemsManager from "../../modules/ItemsManager"
import NavBar from "../site-nav/NavBar"

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
            title: this.state.title,
            details: this.state.details,
            parts: this.state.parts,
            date: this.state.date,
            itemId: parseInt(this.state.itemId)
        };

        MaintenanceManager.updateMaintenanceItem(editedItem)
            .then(() => this.props.history.push(`/items/${this.state.itemId}`))
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
                    name: item.item.name,
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
                <NavBar />
                <div className="wrapper">
                    <h1>Edit Maintenance Form</h1>
                    <form>
                    <picture className="prints">
                            <img src={require('../../icons/prints.png')} alt="fingerprints" />
                        </picture>
                        <h2>{this.state.name}</h2>
                        <div className="input-container">
                            <label htmlFor="date">Date:</label>
                            <input
                                value={this.state.date}
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                className="md-input-field"
                            />

                            <label htmlFor="title " className="md-left-margin">Maintenance:</label>
                            <input
                                value={this.state.title}
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                className="md-input-field"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="details">Details:</label>
                            <input
                                value={this.state.details}
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="details"
                                className="input-field"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="parts">Parts:</label>
                            <input
                                value={this.state.parts}
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="parts"
                                className="input-field"
                            />
                        </div>

                        <button
                            type="submit" className="btn"
                            disabled={this.state.loadingStatus}
                            onClick={this.updateExistingItem
                            }
                        >Save Changes</button>


                    </form>
                </div>
            </>
        );
    }
}

export default MaintenanceEditForm