import React, { Component } from "react"
import { Link } from "react-router-dom";
import RegistrationManager from "../../modules/RegistrationManager";
import UsersManager from "../../modules/UsersManager";
import "../Form.css"

class Registration extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    }


    // Update state when an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createNewUser = evt => {
        evt.preventDefault();
        UsersManager.getUsersData()
            .then(parsedUsers => {

                if (parsedUsers.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())) {
                    alert("Email already exists")
                    console.log(this.state.email)
                } else if (this.state.password !== this.state.confirmPassword) {
                    alert("Passwords dont match")
                } else if (this.state.email === "" || this.state.password === "") {
                    alert("Please fill out all fields")
                } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
                    alert("Please enter a valid email address")
                }
                else {
                    this.setState({ loadingStatus: true });
                    const user = {
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password
                    };


                    // Create the user and redirect user to items
                    RegistrationManager.createNewUser(user)
                        .then(results => {
                            sessionStorage.setItem("activeUser", results.id)
                            this.props.history.push("/items");

                        })

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
                        <h1 class ="h1">Register</h1>
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
                        <div className="input-container">
                            <picture className="authentication--icon">
                                <img src={require('../../icons/lock.png')} alt="lock icon" />
                            </picture>
                            <input onChange={this.handleFieldChange} type="password"
                                className="input-field"
                                id="password"
                                placeholder="Confirm Password"
                                required="" />
                        </div>
                        <button onClick={this.createNewUser} type="submit" className="btn">
                            Register
                    </button>
                    </form>
                    <p className="center">Or<br></br><Link to={"/Login"} className="link">Login</Link></p>
                </div>
            </>
        )
    }

}
export default Registration



