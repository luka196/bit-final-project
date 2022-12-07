import React from 'react'
import "./header.scss"

import {Link} from "react-router-dom"



const Header = () => {
    return (
        <div className="header">

            <h1>naslov</h1>
            <div>
                <button id="btn-rep">
                <Link to="/reports-page">Reports</Link>
                </button>
                <button id="btn-crrep">
                <Link to="/create-reports-page">Create Report</Link>
                </button>
                <button id="btn-login">
                <Link to="/login-page">Log In</Link>
                </button>
                <button id="btn-logout">
                <Link to="/">Log Out</Link>
                </button>

            </div>
        </div>
    )
}

export default Header
