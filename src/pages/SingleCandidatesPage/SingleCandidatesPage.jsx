
import React, { useContext , useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Info from '../../components/Info/Info'
import Reports from '../../components/Reports/Reports'
import "./singleCandidatesPage.scss"
import Modal from '../../components/Modal/Modal'
import { dataContext } from '../../context'
import { useRouteMatch } from 'react-router-dom'


const SingleCandidatesPage = () => {
    const { candidates } = useContext(dataContext)
    const { reports } = useContext(dataContext)
    const [modalData,setModalData] = useState({})
    const [isModalOpen,setIsModalOpen] = useState(false)
    const match = useRouteMatch()
    const singleCandidate = candidates?.find((e) => e.id == match.params.id)
    const singleCandidateReports = reports?.filter((e) => e.candidateId == match.params.id)
    // console.log(singleCandidate);
    // console.log(singleCandidateReports);
    
    // const handleModalData = x => {
    //     console.log(x)
    // };
    
    return (
        <div className="singleCandidatesPage">
            <Header />
            <img src={singleCandidate?.avatar} alt="Image unavailable" />
            <div className="info-div">
                <Info data={singleCandidate?.name} title='Name:' />
                <Info data={singleCandidate?.birthday.slice(4, 16)} title='Date of birth:' />
                <Info data={singleCandidate?.email} title='Email:' />
                <Info data={singleCandidate?.education} title='Education:' />
            </div>
            <h2>Reports</h2>
            <div className="table">
                <div>🠟 Company</div>
                <div>🠟 Interview Date</div>
                <div>🠟 Status</div>
            </div>

            {/* {singleCandidateReports?.map((e) => <Reports openModal={x => handleModalData(x)} data={e} />)} */}
            {singleCandidateReports?.map((e) => <Reports key={e.id} openModal={setIsModalOpen} setModalData={setModalData} data={e} />)}
            {isModalOpen && <Modal data={modalData} closeModal={setIsModalOpen}/>}

            <Footer />
        </div>
    )
}


export default SingleCandidatesPage;
