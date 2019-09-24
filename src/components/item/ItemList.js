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


    componentDidMount() {
        ItemsManager.getAllItems(this.loggedInUser) 
            .then((itemFromDB) => {
                // sort category here
                itemFromDB.sort((a, b) => (a.category.type > b.category.type) ? 1 : -1)
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
        return (
            <>
            <h1 className="center card">My Items</h1>
                {/* <section className="section-content">
                    <button type="button"
                        className="card"
                        onClick={() => { this.props.history.push("/items/new") }}>
                        Add Item
                    </button>
                </section> */}
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
