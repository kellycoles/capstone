import React, { Component } from "react"
import ItemsManager from "../../modules/ItemsManager"

class ItemsEditForm extends Component {
    //set the initial state
    state = {
        name: "",
        year:"",
        model:"",
        category:"",              //category
        image: "",
        manual: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingItem= evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedItem = {
        id: this.props.match.params.itemId,
        name: this.state.name,
        year: this.state.year,
        model: this.state.model,
        category: this.state.category,     //category
        image: this.state.image,
        manual: this.state.manual,
        userId: parseInt(sessionStorage.getItem('activeUser'))
      };

      ItemsManager.updateItem(editedItem)
      .then(() => this.props.history.push("/items"))
    }
    //Below are the fields that populate the edit form
    componentDidMount() {
      ItemsManager.getItem(this.props.match.params.itemId)
      .then(item => {
          this.setState({
            name: item.name,
            year: item.year,
            model: item.model,
            category: item.category, //category
            image: item.image,
            manual: item.manual,
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
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>

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
                id="model"
                value={this.state.model}
              />
              <label htmlFor="model">Model</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="category"
                value={this.state.category}
              />
              <label htmlFor="category">Category</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="image"
                value={this.state.image}
              />
              <label htmlFor="category">Image</label>
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
