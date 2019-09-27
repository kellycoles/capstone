

import React, { Component } from 'react'
import MaintenanceCard from './MaintenanceCard'
import MaintenanceManager from '../../modules/MaintenanceManager'
import CategoryManager from '../../modules/CategoryManager'
//===============================================================================
// check classNames they are still animal

//============================================================================

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
                <h1>My Maintenance</h1>
                {this.state.categories.map(category =>
                    <React.Fragment key={category.id}>
                        <h2>{category.type}</h2>

                        <div>
                            {this.state.items
                                .filter(item => item.categoryId === category.id)
                                .map(item =>
                                    <React.Fragment key={item.id}>
                                        <h3>{item.name}</h3>
                                        <div>
                                            {item.maintenanceItems.map(maintenanceItem =>
                                                <MaintenanceCard
                                                    key={maintenanceItem.id}
                                                    item={maintenanceItem}
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

            </>
        )
    }

}

export default MaintenanceList