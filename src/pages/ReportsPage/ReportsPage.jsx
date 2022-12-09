import React, { useContext, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ReportAdmin from '../../components/ReportAdmin/ReportAdmin'
import Search from '../../components/Search/Search'
import Modal from '../../components/Modal/Modal'
import {Link, useLocation} from "react-router-dom"
import { dataContext } from '../../context'
import "./reportsPage.scss"
const ReportsPage = () => {
    const {reports} = useContext(dataContext)
    const [modalData,setModalData] = useState({})
    const [isModalOpen,setIsModalOpen] = useState(false)
    return (
        <div className="reportsPage">
            <Header/>
            <Search/>
            {reports?.map((e) => <ReportAdmin openModal={setIsModalOpen} setModalData={setModalData} data = {e} />)}
            {isModalOpen && <Modal data={modalData} closeModal={setIsModalOpen}/>}
            <Footer/>
        </div>
    )
}

export default ReportsPage
