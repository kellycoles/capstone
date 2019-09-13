import React, { Component } from "react"
import RegistrationManager from "../../modules/RegistrationManager";
import UsersManager from "../../modules/UsersManager";

class Registration extends Component {

    // Set initial state
    state = {
        username: "",
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

    // Validate user credentials then
    //Save new user to the database
    createNewUser = evt => { 
        evt.preventDefault();
        UsersManager.getUsersData()
            .then(parsedUsers => {
                if (parsedUsers.find(user => user.username.toLowerCase() === this.state.username.toLowerCase())) {
                    alert("Username already exists")
                } else if (parsedUsers.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())) {
                    alert("Email already exists")
                    console.log(this.state.email)
                } else if (this.state.password !== this.state.confirmPassword) {
                    alert("Passwords dont match")
                }else if (parsedUsers.find(user => user.password === this.state.password)) {
                    alert("Password already exists")
                } else if (this.state.username === "" || this.state.email === "" || this.state.password === "") {
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
                        console.log(results)
                            sessionStorage.setItem("activeUser", results.id)
                            this.props.history.push("/items");
        
                    })
                        
                }
            })
    }


    render() {
        return (
            <form>
                <fieldset>
                    <h3>Register</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                        <label htmlFor="inputUsername">Username</label>

                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required="" />
                        <label htmlFor="inputPassword">Confirm Password</label>
                    </div>
                    <button onClick={this.createNewUser} type="submit">
                        Register New Account
                    </button>
                </fieldset>
            </form>
        )
    }

}
export default Registration



