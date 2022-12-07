import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ReportAdmin from '../../components/ReportAdmin/ReportAdmin'
import Search from '../../components/Search/Search'
import {Link, useLocation} from "react-router-dom"
import { dataContext } from '../../context'
import "./reportsPage.scss"
const ReportsPage = () => {
    const {reports} = useContext(dataContext)
    return (
        <div className="reportsPage">
            ReportsPage
            <Header/>
            <Search/>
            {reports?.map((e) => <ReportAdmin data = {e} />)}
            <Footer/>
        </div>
    )
}

export default ReportsPage
