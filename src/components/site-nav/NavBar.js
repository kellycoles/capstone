import React, { Component } from "react"
import { Link } from "react-router-dom"
import '../site-nav/NavBar.css'


class NavBar extends Component {
    render() {
        return (
            <>
                <header>

                    <h1 className="site-title">   <picture className="logo-icon">
                        <img src={require('../../icons/tools-red.png')} alt="logo-icon" />
                    </picture>The Maintenance Log</h1>
                </header>
                <nav>
                    <ul className="container">
                        <li><Link className="nav-link" to="/">Home</Link></li>

                        <li><Link className="nav-link" to="/items">My Items</Link></li>

                        <li><Link className="nav-link" to="/items/new">Add New Item</Link></li >

                        <li><Link className="nav-link" to="/maintenanceItems">My Maintenance</Link></li >
                    </ul >
                </nav >
            </>


        )
    }
}

export default NavBar