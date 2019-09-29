import React, { Component } from 'react';
import ItemsManager from '../../modules/ItemsManager';
import CategoryManager from '../../modules/CategoryManager';
import NavBar from "../site-nav/NavBar"
// import "./Form.css"
class ItemForm extends Component {
    state = {
        name: "",
        year: "",
        model: "",
        image: "",
        manual: "",
        notes: "",
        userId: "",
        categoryId: "",
        categories: [],
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

    constructNewItem = evt => {
        evt.preventDefault();
        if (this.state.categoryId === "" || this.state.name === "" || this.state.year === "" || this.state.model === "" || this.state.category === "") {
            window.alert("Please complete name, year, and model fields");
        } else {

            this.setState({ loadingStatus: true });

            const item = {
                name: this.state.name,
                year: this.state.year,
                model: this.state.model,
                categoryId: parseInt(this.state.categoryId),
                image: this.state.image,
                manual: this.state.manual,
                notes: this.state.notes,
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
                <NavBar />
                <div className="wrapper">
                    <form>
                        <h1>Add Item Form</h1>
                        <div className="input-container">
                            <select id="categoryId" className="select" value={this.state.category} onChange={this.handleFieldChange}>
                                <option value="">Select Category</option>
                                {this.state.categories.map(category =>
                                    <option key={category.id} value={category.id}>
                                        {category.type}
                                    </option>
                                )
                                }
                            </select>
                        </div>

                        <div className="input-container">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                className="sm-input-field"
                                id="name"
                            />

                            <label htmlFor="model" className="left-margin">Model:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                className="sm-input-field"
                                id="model"
                            />

                            <label htmlFor="year" className="left-margin">Year:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                className="sm-input-field"
                                id="year"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="image">Image:</label>
                            <input
                                type="text"
                                placeholder="    URL"
                                required
                                onChange={this.handleFieldChange}
                                className="input-field"
                                id="image"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="manual">Manual:</label>
                            <input
                                type="text"
                                placeholder="    URL"
                                required
                                onChange={this.handleFieldChange}
                                className="input-field"
                                id="manual"
                            />
                        </div>

                        <div className="input-container">
                            <label htmlFor="manual">Notes:</label>
                            <input
                                type="text"
                                placeholder=""
                                required
                                onChange={this.handleFieldChange}
                                className="input-field"
                                id="notes"
                            />
                        </div>


                        <button type="submit" className="btn"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewItem
                            }
                        >Add Item</button>
                    </form>
                </div>
            </>
        )
    }
}

export default ItemForm