import React, { Component } from "react"
import ItemsManager from "../../modules/ItemsManager"
import CategoryManager from "../../modules/CategoryManager"

class ItemsEditForm extends Component {
  //set the initial state
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
      image: this.state.image,
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
          image: item.image,
          manual: item.manual,
          notes: item.notes,
          loadingStatus: false,
        });
      });
  }

  render() {
    return (
      <>
        <form>
          <h1>Edit Item Form</h1>
          <h2>Edit: {this.state.name}</h2>
          <fieldset>
            <div className="formgrid">
              <select id="categoryId" value={this.state.categoryId} onChange={this.handleFieldChange}>
                {this.state.categories.map(category =>
                  <option key={category.id} value={category.id}>
                    {category.type}
                  </option>
                )

                }

              </select>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="model"
                value={this.state.model}
              />
              <label htmlFor="model">Model</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="year"
                value={this.state.year}
              />
              <label htmlFor="year">Year</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="image"
                value={this.state.image}
              />
              <label htmlFor="image">Image</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="manual"
                value={this.state.manual}
              />
              <label htmlFor="manual">Manual:</label>

              <textarea value={this.state.notes}
                onChange={this.handleFieldChange}
                className="form-control"
                id="notes"
              />
              <label htmlFor="notes">Notes:</label>
            
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

export default ItemsEditForm
