import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ReportAdmin from '../../components/ReportAdmin/ReportAdmin'
import Search from '../../components/Search/Search'
import {Link} from "react-router-dom"

import "./reportsPage.scss"
const ReportsPage = () => {
    return (
        <div className="reportsPage">
            ReportsPage
            <Header/>
            <Search/>
            <ReportAdmin/>
            <Footer/>
        </div>
    )
}

export default ReportsPage
