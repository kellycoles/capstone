import React, { Component } from 'react';
import MaintenanceManager from '../../modules/MaintenanceManager';
import ItemsManager from '../../modules/ItemsManager';
import NavBar from "../site-nav/NavBar"

class MaintenanceForm extends Component {
    state = {
        title: "",
        details: "",
        parts: "",
        date: new Date().toISOString().slice(0, 10),
        item: {},
        loadingStatus: false,
    };
    componentDidMount() {
        ItemsManager.getItem(this.props.itemId)
            .then(item => this.setState({ item }))

    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewMaintenance = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.details === "" || this.state.parts === "" || this.state.category === "" || this.state.date === "") {
            window.alert("Please complete all fields");
        } else {

            this.setState({ loadingStatus: true });

            const maintenance = {
                title: this.state.title,
                details: this.state.details,
                parts: this.state.parts,
                date: this.state.date,
                itemId: parseInt(this.state.item.id)

            };
            MaintenanceManager.postMaintenanceItem(maintenance)
                .then(() => this.props.history.push(`/items/${this.state.item.id}`))

        }
    }

    render() {
        return (
            <>
                <NavBar />
                <div className="wrapper">
                    <h1>Add Maintenance</h1><picture className="prints">
                            <img src={require('../../icons/prints.png')} alt="fingerprints" />
                        </picture>
                    
                   
                    <form>
                        <h2>{this.state.item.name}</h2>
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
                            onClick={this.constructNewMaintenance
                            }
                        >Add Maintenance</button>

                    </form>
                </div>
            </>
        )
    }
}

export default MaintenanceForm