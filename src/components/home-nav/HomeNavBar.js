import React, { Component } from "react"
import { Link } from "react-router-dom"



class HomeNavBar extends Component {
    render() {
        return (
            <nav className="nav-container">
               <div className="title">  <picture>
                    <img src={require('../../icons/tools-red.png')} alt="logo-icon" />
                </picture><h1>The Maintenance Log</h1></div>
                 <ul className="nav">
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

                </ul>
            </nav>
        )
    }
}

export default HomeNavBar