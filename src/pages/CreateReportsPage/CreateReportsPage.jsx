import React from 'react'
import FillReport from '../../components/FillReport/FillReport'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import SelectCandidate from '../../components/SelectCandidate/SelectCandidate'
import SelectCompany from '../../components/SelectCompany/SelectCompany'
import "./createReportsPage.scss"
const CreateReportsPage = () => {
    return (
        <div className="createReportsPage">
            CreateReportsPage
            <Header/>
            <div>

                <div>
                    <span>1</span>
                    <span>Select Candidate</span>
                </div>
                <div>
                    <span>2</span>
                    <span>Select Company</span>
                </div>
                <div>
                    <span>3</span>
                    <span>Fill Report Details</span>
                </div>
                <Info/>
                <Info/>

            </div>
            <SelectCandidate/>
            <SelectCompany/>
            <FillReport/>
        </div>
    )
}

export default CreateReportsPage
