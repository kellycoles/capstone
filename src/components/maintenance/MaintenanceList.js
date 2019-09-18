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
        MaintenanceManager.getMaintenceItems(this.loggedInUser)
            .then((itemFromDB) => {
                this.setState({
                    maintenanceItems: itemFromDB
                })
            })
    }

    deleteMaintenanceItem = id => {
        MaintenanceManager.deleteItem(id)
            .then(() => {
                MaintenanceManager.getMaintenanceItems(this.loggedInUser)
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
                    <button type="button"
                        className="card"
                        onClick={() => { this.props.history.push("/maintenanceItems/new") }}>
                        Add Maintenance
                    </button>
                </section>
                    {this.state.maintenanceItems.map(item =>
                    <MaintenanceCard
                            key={item.id}
                            item={item}
                            deleteItem={this.deleteItem}
                            {...this.props} />
                    )}
            </>
        )
    }

}

export default MaintenanceList
