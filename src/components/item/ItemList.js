import React, { Component } from 'react'
import ItemCard from './ItemCard'
import ItemsManager from '../../modules/ItemsManager'
import CategoryManager from '../../modules/CategoryManager'

//===============================================================================
// check classNames they are still animal
//============================================================================

class ItemList extends Component {
    state = {
        items: [],
        categories: []
    }
    loggedInUser = parseInt(sessionStorage.getItem("activeUser"))


    componentDidMount() {

        CategoryManager.getAllItems()
            .then(categoriesFromDB => this.setState({ categories: categoriesFromDB }))


        ItemsManager.getAllItems(this.loggedInUser)
            .then((itemFromDB) => {
                // sort category a-z
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
                {this.state.categories.map(category =>
                    <React.Fragment key= {category.id}>
                        <h2>{category.type}</h2>
                        <div>
                            {this.state.items
                                .filter(item => item.categoryId === category.id)
                                .map(item =>

                                    <ItemCard
                                        key={item.id}
                                        item={item}
                                        deleteItem={this.deleteItem}
                                        {...this.props} />
                                )}
                        </div>
                    </React.Fragment>
                )}

            </>
        )
    }

}

export default ItemList
