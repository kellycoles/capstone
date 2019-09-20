import React, { Component } from 'react';
import MaintenanceManager from '../../modules/MaintenanceManager';
import ItemsManager from '../../modules/ItemsManager';

class MaintenanceForm extends Component {
    state = {
        name: "",
        title: "",
        details: "",
        parts: "",
        date: "",
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
                .then(() => this.props.history.push(`/maintenanceItems
                `));
        }
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h1 className="center card">Add Maintenance Form</h1>
                <form>
                    <h2>You are adding maintenance to: {this.state.item.name}</h2>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"


                            />
                            <label htmlFor="date">Date of Maintenance:</label>


                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"

                            />
                            <label htmlFor="title">Maintenance Performed</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="details"

                            />
                            <label htmlFor="details">Maintenance Details:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="parts"

                            />
                            <label htmlFor="parts">Parts Used:</label>


                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewMaintenance
                                }
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default MaintenanceForm