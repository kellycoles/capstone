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
        itemId: "",
        items: [],
        loadingStatus: false,
    };
    componentDidMount() {
        ItemsManager.getItems()
            .then(items => this.setState({ items }))

    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewMaintenance = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.title === "" || this.state.details === "" || this.state.parts === "" || this.state.category === "" || this.state.date === "") {
            window.alert("Please complete all fields");
        } else {

            this.setState({ loadingStatus: true });

            const maintenance = {

                name: this.state.name,
                title: this.state.title,
                details: this.state.details,
                parts: this.state.parts,
                date: this.state.date,
                model: this.state.model,
                year: this.state.year,
                itemId: parseInt(this.state.itemId)

            };

            MaintenanceManager.postMaintenanceItem(maintenance)
                .then(() => this.props.history.push(`/maintenanceItems
                `));
        }
    }

    render() {

        return (
            <>
                <h1 className="center card">Maintenance Log Form</h1>
                <form>
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
                                id="name"

                            />
                            <label htmlFor="name">Name of Item</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="model"

                            />
                            <label htmlFor="model">Model:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="year"

                            />
                            <label htmlFor="year">Year:</label>


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