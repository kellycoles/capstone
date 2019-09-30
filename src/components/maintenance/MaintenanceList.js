

import React, { Component } from 'react'
import MaintenanceCard from './MaintenanceCard'
import MaintenanceManager from '../../modules/MaintenanceManager'
import CategoryManager from '../../modules/CategoryManager'
import NavBar from "../site-nav/NavBar"
import "../item/ItemList.css"


class MaintenanceList extends Component {

    state = {
        items: [],
        categories: []
    }
    loggedInUser = parseInt(sessionStorage.getItem("activeUser"))

    componentDidMount() {
        CategoryManager.getAllItems()
            .then(categoriesFromDB => this.setState({ categories: categoriesFromDB }))

        MaintenanceManager.getItemsWithMaintenanceItems(this.loggedInUser)
            .then((itemFromDB) => {
                itemFromDB.sort((a, b) => (a.name > b.name) ? 1 : -1)
                this.setState({
                    items: itemFromDB,

                })
            })
    }

    deleteMaintenanceItem = id => {
        MaintenanceManager.deleteMaintenanceItem(id)
            .then(() => {
                MaintenanceManager.getItemsWithMaintenanceItems()
                    .then((newItem) => {
                        this.setState({
                            maintenanceItems: newItem
                        })
                    })
            })
    }

    render() {

        return (
            <>
                <NavBar />
                <h1 className="center">My Maintenance</h1>
                <div className="card-container">
                    {this.state.categories.map(category =>
                        <React.Fragment key={category.id}>
                            <h2>{category.type}</h2>

                            <div>
                                {this.state.items
                                    .filter(item => item.categoryId === category.id)
                                    .map(item =>
                                        <React.Fragment key={item.id}>
                                            {/* <h3>{item.name}</h3> */}
                                            <div>
                                                {item.maintenanceItems.map(maintenanceItem =>
                                                    <MaintenanceCard
                                                        key={maintenanceItem.id}
                                                        item={maintenanceItem}
                                                        name={item.name}
                                                        deleteItem={this.deleteMaintenanceItem}
                                                        {...this.props} />
                                                )
                                                }
                                            </div>
                                        </React.Fragment>

                                    )}

                            </div>

                        </React.Fragment>

                    )}
                </div>
            </>
        )
    }

}

export default MaintenanceList