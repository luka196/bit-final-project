import React from 'react'
import "./header.scss"
import {Link} from "react-router-dom"


const Header = () => {
    return (
        <div className="header">
            <h1>naslov</h1>
            <div>
                <button>
                <Link to="/reports-page">Reports</Link>
                </button>
                <button>
                <Link to="/create-reports-page">Create Report</Link>
                </button>
                <button>
                <Link to="/login-page">Log In</Link>
                </button>
                <button>
                <Link to="/">Log Out</Link>
                </button>
            </div>
        </div>
    )
}

export default Header
