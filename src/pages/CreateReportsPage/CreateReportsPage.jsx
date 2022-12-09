import React, {useState} from 'react'
import FillReport from '../../components/FillReport/FillReport'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Info from '../../components/Info/Info'
import SelectCandidate from '../../components/SelectCandidate/SelectCandidate'
import SelectCompany from '../../components/SelectCompany/SelectCompany'
import "./createReportsPage.scss"
const CreateReportsPage = () => {
    const [page,setPage] = useState(1)
    const [candidate,setCandidate] = useState({})
    const [company,setCompany] = useState({})

    return (
        
        <div className="createReportsPage">
            
            <Header/>
            <div>

                <div className={page === 1 && "activeNav"}>
                   <p> <div>1</div>
                    Select Candidate</p>
                </div>
                <div className= {page === 2 && "activeNav"}>
                    <p><div>2</div>
                    Select Company</p>
                </div>
                <div className= {page === 3 && "activeNav"}>
                    <p><div>3</div>
                    Fill Report Details</p>
                </div>
                {(page === 2 || page === 3 ) && <Info data = {candidate?.name} title = "Candidate:"/>}
                {page === 3 && <Info data = {company?.name} title = "Company:"/>}

            </div>
            {page === 1 && <SelectCandidate setPage = {setPage} setCandidate={setCandidate}/>}
            {page === 2 && <SelectCompany setPage = {setPage} setCompany={setCompany}/>}
            {page === 3 && <FillReport setPage = {setPage} candidate={candidate} company={company}/>}
            <Footer/>

        </div>
    )
}

export default CreateReportsPage
