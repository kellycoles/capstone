import React, { Component } from 'react';
import MaintenanceManager from '../../modules/MaintenanceManager';
import CategoryManager from '../../modules/CategoryManager';

class MaintenanceForm extends Component {
    state = {
        name: "",
        title: "",
        details: "",
        parts: "",
        date: "",
        userId: "",
        categoryId: "",
        itemId: "",
        loadingStatus: false,
    };
    componentDidMount() {
        CategoryManager.getAllItems()
            .then(categories => this.setState({ categories }))
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create item object, invoke the ItemsManager post method, and redirect to the item list
    */
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
                ItemId: parseInt(this.state.ItemId)
            };

            MaintenanceManager.postMaintenanceItem(maintenance)
                .then(() => this.props.history.push("/maintenanceItems"));
        }
    };

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