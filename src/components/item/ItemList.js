import React, { Component } from 'react'
//import the components needed
import ItemCard from './ItemCard'
import ItemsManager from '../../modules/ItemsManager'

//===============================================================================
// check classNames they are still animal
//============================================================================

class ItemList extends Component {
    //define what this component needs to render
    state = {
        items: [],
    }
  //store the logged in user's id to use later to show only that person's data
    loggedInUser = parseInt(sessionStorage.getItem("activeUser"))

    componentDidMount() {
        console.log(this.loggedInUser)
        //getAll from ItemManager and hang on to that data; put it in state
        ItemsManager.getAllItems(this.loggedInUser)
            .then((itemFromDB) => {
                console.log(itemFromDB)
                this.setState({
                    items: itemFromDB
                })
            })
    }

    deleteItem = id => {
        ItemsManager.deleteItem(id)
            .then(() => {
                ItemsManager.getAllItems(this.loggedInUser)
                    .then((newItem) => {
                        this.setState({
                            items: newItem
                        })
                    })
            })
    }

    render() {
console.log(this.state.items)
        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="card"
                        onClick={() => { this.props.history.push("/items/new") }}>
                        Add Item
                    </button>
                </section>
                    {this.state.items.map(item =>
                    <ItemCard
                            key={item.id}
                            item={item}
                            
                            {...this.props} />
                    )}
            </>
        )
    }

}

export default ItemList