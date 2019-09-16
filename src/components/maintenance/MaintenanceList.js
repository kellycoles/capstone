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

    componentDidMount() {
        console.log(this.loggedInUser)
        MaintenanceManager.getAllMaintenceItems(this.loggedInUser)
            .then((itemFromDB) => {
                this.setState({
                    maintenanceItems: itemFromDB
                })
            })
    }

    deleteMaintenanceItem = id => {
        MaintenanceManager.deleteItem(id)
            .then(() => {
                MaintenanceManager.getAllMaintenanceItems(this.loggedInUser)
                    .then((newItem) => {
                        this.setState({
                            maintenanceItems: newItem
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
                        onClick={() => { this.props.history.push("/maintenanceItems/new") }}>
                        Add Maintenance
                    </button>
                </section>
                    {this.state.items.map(item =>
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
