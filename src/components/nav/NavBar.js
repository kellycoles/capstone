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
                        <Link className="nav-link" to="/items">Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/maintenance">Maintenance Log</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar