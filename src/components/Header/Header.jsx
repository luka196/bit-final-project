import React from 'react'
import "./header.scss"



const Header = () => {
    return (
        <div className="header">
            <h1>Interviews Reports</h1>
            <div>
                <button id="btn-rep">Reports</button>
                <button id="btn-crrep">Create Report</button>
                <button id="btn-login">Log In</button>
                <button id="btn-logout">Log Out</button>
            </div>
        </div>
    )
}

export default Header
