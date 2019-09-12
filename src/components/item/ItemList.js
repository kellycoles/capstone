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
        events: [],
    }
    
    loggedInUser = parseInt(sessionStorage.getItem("activeUser"))
    componentDidMount() {
             //getAll from ItemManager and hang on to that data; put it in state
        ItemManager.getAllItems(this.loggedInUser)
            .then((itemFromDB) => {
                this.setState({
                    item: itemFromDB
                })
            })
    }

    deleteItem = id => {
        ItemManager.deleteItem(id)
            .then(() => {
                ItemsManager.getAllItems(this.loggedInUser)
                    .then((newItem) => {
                        this.setState({
                            item: newItem
                        })
                    })
            })
    }

    render() {

        return (
            <>
                <h1 className="center card"></h1>
                <section className="section-content">
                    <button type="button"
                        className="card"
                        onClick={() => { this.props.history.push("/items/new") }}>
                        Add Item
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.events.map(item =>
                        <ItemCard
                            key={item.id}
                            event={item}
                            deleteEvent={this.delete}Item
                            {...this.props} />
                    )}
                </div>
            </>
        )
    }

}

export default ItemList