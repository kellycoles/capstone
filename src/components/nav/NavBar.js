import React, { Component } from "react"
import { Link } from "react-router-dom"



class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/items">My Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/items/new">Add New Item</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/maintenanceItems">My Maintenance</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/maintenanceItems/new">Add Maintenance</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar