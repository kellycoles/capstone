import React, { Component } from "react"
import ItemsManager from "../../modules/ItemsManager"
import CategoryManager from "../../modules/CategoryManager"
import NavBar from "../site-nav/NavBar"
import "../Form.css"

class ItemsEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    year: "",
    model: "",
    manual: "",
    notes: "",
    userId: "",
    categoryId: "",
    categories: [],
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
      year: this.state.year,
      model: this.state.model,
      categoryId: parseInt(this.state.categoryId),
      manual: this.state.manual,
      notes: this.state.notes,
      userId: parseInt(sessionStorage.getItem('activeUser'))
    };

    ItemsManager.updateItem(editedItem)
      .then(() => this.props.history.push("/items"))
  }
  //Below are the fields that populate the edit form
  componentDidMount() {

    CategoryManager.getAllItems()
      .then(categories => this.setState({ categories }))

    ItemsManager.getItem(this.props.match.params.itemId)
      .then(item => {
        this.setState({
          name: item.name,
          year: item.year,
          model: item.model,
          categoryId: parseInt(item.categoryId),
          manual: item.manual,
          notes: item.notes,
          loadingStatus: false,
        });
      });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="wrapper">
          <form>
            <h1>Edit Item Form</h1>
            
            <div className="input-container">
            <select id="categoryId" className="select" value={this.state.categoryId} onChange={this.handleFieldChange}>
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
                value= {this.state.name}
              />

              <label htmlFor="model" className="left-margin">Model:</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                className="sm-input-field"
                id="model"
                value= {this.state.model}
              />

              <label htmlFor="year" className="left-margin">Year:</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                className="sm-input-field"
                id="year"
                value= {this.state.year}
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
                value= {this.state.manual}
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
                value= {this.state.notes}
              />
            </div>


            <button type="submit" className="btn"
              disabled={this.state.loadingStatus}
              onClick={this.updateExistingItem
              }
            > Save Changes</button>
          </form>
        </div>
      </>
    );
  }
}

export default ItemsEditForm
