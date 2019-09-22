

import React, { Component } from 'react'
import MaintenanceCard from './MaintenanceCard'
import MaintenanceManager from '../../modules/MaintenanceManager'

//===============================================================================
// check classNames they are still animal
//============================================================================

class MaintenanceList extends Component {
    //define what this component needs to render

    state = {
        maintenanceItems: [],
    }
    //store the logged in user's id to use later to show only that person's data
    loggedInUser = parseInt(sessionStorage.getItem("activeUser"))

    // make a function to get all items line 20,31
    componentDidMount() {
        console.log(this.loggedInUser)
        MaintenanceManager.getMaintenanceItems()
            .then((itemFromDB) => {
                itemFromDB.sort((a, b) => (a.item.name > b.item.name) ? 1 : -1)
                this.setState({
                    maintenanceItems: itemFromDB
                })
            })
    }

    deleteMaintenanceItem = id => {
        MaintenanceManager.deleteMaintenanceItem(id)
            .then(() => {
                MaintenanceManager.getMaintenanceItems()
                    .then((newItem) => {
                        this.setState({
                            maintenanceItems: newItem
                        })
                    })
            })
    }

    render() {
        console.log(this.state.maintenanceItems)
        return (
            <>
                <h1>My Maintenance</h1>
                <section className="section-content">

                </section>
                {this.state.maintenanceItems.filter(unfiltered => unfiltered.item.userId === this.loggedInUser)
                    .map(item =>
                        <MaintenanceCard
                            key={item.id}
                            item={item}
                            deleteItem={this.deleteMaintenanceItem}
                            {...this.props} />
                    )}
            </>
        )
    }

}

export default MaintenanceList