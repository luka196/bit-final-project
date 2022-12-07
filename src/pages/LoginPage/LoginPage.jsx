import React from 'react'
import "./loginPage.scss"
import {Link} from "react-router-dom"
import Header from '../../components/Header/Header'

const LoginPage = () => {
    return (
        <div className="loginPage">
            <Header/>
         <button>
            <Link to="/reports-page">Log In</Link>
         </button>
        </div>
    )
}

export default LoginPage
