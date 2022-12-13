import React, { useContext, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ReportAdmin from '../../components/ReportAdmin/ReportAdmin'
import Search from '../../components/Search/Search'
import Modal from '../../components/Modal/Modal'
import { Link, useLocation } from "react-router-dom"
import { dataContext } from '../../context'
import "./reportsPage.scss"
import ModalDetails from '../../components/ModalDetails/ModalDetails'
// import ModalDelete from '../../components/ModalDelete/ModalDelete'

const ReportsPage = () => {
    const { reports } = useContext(dataContext)
    const [modalData, setModalData] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [searchString, setSearchString] = useState('')
    const filterCandidates = reports.filter(can => can?.candidateName?.toLowerCase().includes(searchString.toLowerCase()))
    return (

        <div className="reportsPage">
            <Header />
            <Search setSearchString={setSearchString} searchString={searchString} />
            {filterCandidates?.map((e) => <ReportAdmin setModalData={setModalData} data={e} setIsDeleteModalOpen={setIsDeleteModalOpen} key={e.id}/>)}

            <Modal isOpenModal={modalData} closeModal={() => setModalData(null)}>
                <ModalDetails data={modalData} />
                {/* <ModalDetails/> */}
            </Modal>
            <Modal isOpenModal={isDeleteModalOpen} closeModal={() => setIsDeleteModalOpen(false)}>
                {/* <ModalDelete /> */}
                {/* <ModalDelete/> */}
            </Modal>
            <Footer />
        </div>
    )
}

export default ReportsPage
