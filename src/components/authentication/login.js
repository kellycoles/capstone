import React, { Component } from "react"
import UsersManager from "../../modules/UsersManager";
import { Link } from "react-router-dom";
import "../Form.css"


class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault()
        UsersManager.checkUser(this.state.email, this.state.password)
            .then(results => {
                if (results.length > 0) {
                    sessionStorage.setItem("activeUser", results[0].id)
                    this.props.history.push("/items");

                } else {
                    alert("Incorrect email or password")
                }
            })
    }

    render() {
        return (
            <>
               <header>
                    <h1 className="site-title">   <picture className="logo-icon">
                        <img src={require('../../icons/tools-red.png')} alt="logo-icon" />
                    </picture>The Maintenance Log</h1>
                </header>
               
                <div className="wrapper">
                    <form onSubmit={this.handleLogin}>
                        <h1 class ="h1">Login</h1>
                        <div className="input-container">
                            <picture className="authentication--icon">
                                <img src={require('../../icons/email.png')} alt="envelope icon" />
                            </picture>
                            <input onChange={this.handleFieldChange} type="email"
                                className="input-field"
                                id="email"
                                placeholder="Email address"
                                required="" autoFocus="" />
                        </div>
                        <div className="input-container">
                            <picture className="authentication--icon">
                                <img src={require('../../icons/lock.png')} alt="lock icon" />
                            </picture>
                            <input onChange={this.handleFieldChange} type="password"
                                className="input-field"
                                id="password"
                                placeholder="Password"
                                required="" />
                        </div>
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </form>
                    <p className="center">Or<br></br><Link to={"/Registration"} className="link">Register new account</Link></p>
                </div>
            </>
        )
    }
}


export default Login