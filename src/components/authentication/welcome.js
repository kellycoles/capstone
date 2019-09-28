import React, { Component } from 'react'
import { Link } from "react-router-dom";



class Welcome extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Welcome to The Maintenance Log</h1>
                    
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
