
import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom"
import login from './authentication/login'
import welcome from "./authentication/welcome";
import registration from "./authentication/registration";
import ItemList from './item/ItemList'
import ItemForm from './item/ItemForm'
import ItemEditForm from './item/ItemEditForm'

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
                <Route path="/items/new" render={(props) => {
                    return <ItemForm {...props} />
                }} />
                <Route path="/items/:itemId(\d+)/edit" render={props => {
                    return <ItemEditForm {...props} />
                }}
                />

            </React.Fragment>
        )
    }
}