import React, { Component } from 'react';
import ItemsManager from '../../modules/ItemsManager';

class ItemForm extends Component {
    state = {
        name: "",
        year: "",
        model: "",
        image: "",
        manual: "",
        userId: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create item object, invoke the ItemsManager post method, and redirect to the item list
    */
    constructNewItem = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.year === "" || this.state.model === "") { //add category================
            window.alert("Please complete name, year, and model");
        } else {

            this.setState({ loadingStatus: true });

            const item = {
                name: this.state.name,
                year: this.state.year,
                model: this.state.model,
                image: this.state.image,
                manual: this.state.manual,
                //add category here==================================
                userId: parseInt(sessionStorage.getItem('activeUser'))
            };

            // Create the\item and redirect user to item list
            ItemsManager.postItem(item)
                .then(() => this.props.history.push("/items"));
        }
    };

    render() {

        return (
            <>
                <h1 className="center card">New Item Form</h1>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"

                            />
                            <label htmlFor="name">Name</label>
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
                                id="image"

                            />
                            <label htmlFor="year">Image:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="manual"

                            />
                            <label htmlFor="year">Manual:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="notes"

                            />
                            <label htmlFor="year">Notes:</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewItem
                                }
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default ItemForm