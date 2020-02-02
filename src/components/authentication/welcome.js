import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Welcome.css"




class Welcome extends Component {
    render() {
        return (
            <>
                <div className="header-container">
                    <div className="header">
                        <picture className="logo--icon">
                            <img src={require('../../icons/lg-logo.png')} alt="logo-icon" />
                        </picture>
                        <h1 className="welcome">Welcome to The Maintenance Log</h1>
                        {/* <small>A maintenance record keeper</small></h1> */}
                    </div>
                </div>

                <div className="welcome--btns">
                    <Link to="/Registration"><button className="register--btn">Register New Account</button></Link>
                    <Link to="/Login"><button className="login--btn">Login</button></Link>
                </div>

            </>
        );
    }
}

export default Welcome;
