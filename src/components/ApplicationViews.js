import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom"
import login from './authentication/login'
import welcome from "./authentication/welcome";
import registration from "./authentication/registration";
import ItemList from './item/ItemList'
import ItemForm from './item/ItemForm'
import ItemDetails from './item/ItemDetails'
import ItemEditForm from './item/ItemEditForm'
import MaintenanceForm from './maintenance/MaintenanceForm'
import MaintenanceList from './maintenance/MaintenanceList'
// import MaintenanceDetails from './maintenance/MaintenanceDetails'
import MaintenanceEditForm from './maintenance/MaintenanceEditForm'

export default class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("activeUser") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={welcome} />
                <Route path="/registration" component={registration} />
                <Route path="/login" component={login} />

                <Route exact path="/items" render={props => {
                    if (this.isAuthenticated()) {
                        return <ItemList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/items/new" render={(props) => {
                    return <ItemForm {...props} />
                }} />
                <Route exact path="/items/:itemId(\d+)/edit" render={props => {
                    return <ItemEditForm {...props} />
                }}
                />
                <Route exact path="/items/:itemId(\d+)" render={(props) => {
                    return <ItemDetails itemId={parseInt(props.match.params.itemId)}{...props} />
                }} />

                 <Route exact path="/maintenanceItems" render={props => {
                    if (this.isAuthenticated()) {
                        return <MaintenanceList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/maintenanceItems/:itemId(\d+)/new" render={(props) => {
                    return <MaintenanceForm itemId={parseInt(props.match.params.itemId)}{...props}  />
                }} />
                <Route path="/maintenanceItems/:maintenanceItemsId(\d+)/edit" render={props => {
                    return <MaintenanceEditForm {...props} />
                }}
                />

            </React.Fragment>
        )
    }
}