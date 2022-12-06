import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import Reports from '../../components/Reports/Reports'
import "./singleCandidatesPage.scss"
const SingleCandidatesPage = () => {
    return (
        <div className="singleCandidatesPage">
            SingleCandidatesPage
            <Header/>
            <img alt="img"/>
            <div>
                <Info/>
                <Info/>
                <Info/>
                <Info/>
            </div>
            <h2>Reports</h2>
            <div>
                <div>🠟Company</div>
                <div>🠟Interview Date</div>
                <div>🠟Status</div>
            </div>
            <Reports/>
            <Footer/>
        </div>
    )
}

export default SingleCandidatesPage
