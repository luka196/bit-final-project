
import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import Reports from '../../components/Reports/Reports'
import "./singleCandidatesPage.scss"
import { dataContext } from '../../context'
import { useRouteMatch } from 'react-router-dom'
const SingleCandidatesPage = () => {
    const { candidates } = useContext(dataContext)
    const match = useRouteMatch()
    const singleCandidate = candidates?.find((e) => e.id == match.params.id)
    console.log(singleCandidate);
    return (
        <div className="singleCandidatesPage">
            <Header />
            <img src={singleCandidate?.avatar} alt="Image unavailable" />
            <div className="info-div">
                <Info data = {singleCandidate?.name} title = 'Name:'/>
                <Info data = {singleCandidate?.birthday.slice(4,16)} title = 'Date of birth:'/>
                <Info data = {singleCandidate?.email} title = 'Email:'/>
                <Info data = {singleCandidate?.education} title = 'Education:'/>
            </div>
            <h2>Reports</h2>
            <div className="table">
                <div>🠟Company</div>
                <div>🠟Interview Date</div>
                <div>🠟Status</div>
            </div>
            <Reports />
            <Reports />
            <Reports />
            <Footer />
        </div>
    )
}


export default SingleCandidatesPage;
