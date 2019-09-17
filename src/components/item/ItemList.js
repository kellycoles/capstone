import React, { Component } from 'react'
import ItemCard from './ItemCard'
import ItemsManager from '../../modules/ItemsManager'

//===============================================================================
// check classNames they are still animal
//============================================================================

class ItemList extends Component {
    state = {
        items: [],
    }
    loggedInUser = parseInt(sessionStorage.getItem("activeUser"))

// put getAllItems in a function call it in line 19 and line 31. sort by category in function

    componentDidMount() {
        console.log(this.loggedInUser)
        ItemsManager.getAllItems(this.loggedInUser)   //this is going to be a function call
            .then((itemFromDB) => {
                // sort category here
                this.setState({
                    items: itemFromDB
                })
            })
    }

    deleteItem = id => {
        ItemsManager.deleteItem(id)
            .then(() => {
                ItemsManager.getAllItems(this.loggedInUser) //this is going to be a function call
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
                            deleteItem={this.deleteItem}  
                            {...this.props} />
                    )}
            </>
        )
    }

}

export default ItemList
