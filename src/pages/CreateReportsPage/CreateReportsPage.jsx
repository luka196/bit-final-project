import React, {useState} from 'react'
import FillReport from '../../components/FillReport/FillReport'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import SelectCandidate from '../../components/SelectCandidate/SelectCandidate'
import SelectCompany from '../../components/SelectCompany/SelectCompany'
import "./createReportsPage.scss"
const CreateReportsPage = () => {
    const [page,setPage] = useState(1)
    return (
        
        <div className="createReportsPage">
            
            <Header/>
            <div>

                <div className={page === 1 && "activeNav"}>
                    <span>1</span>
                    <span>Select Candidate</span>
                </div>
                <div className= {page === 2 && "activeNav"}>
                    <span>2</span>
                    <span>Select Company</span>
                </div>
                <div className= {page === 3 && "activeNav"}>
                    <span>3</span>
                    <span>Fill Report Details</span>
                </div>
                {/* <Info/>
                <Info/> */}

            </div>
            {page === 1 && <SelectCandidate setPage = {setPage}/>}
            {page === 2 && <SelectCompany setPage = {setPage}/>}
            {page === 3 && <FillReport setPage = {setPage}/>}
        </div>
    )
}

export default CreateReportsPage
