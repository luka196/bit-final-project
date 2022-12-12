import React from 'react'
import "./reports.scss"

const Reports = ({ data, openDetailsModal, setModalData }) => {

    return (

        <div className="reports">
            <div>
                <div>{data.companyName}</div>
                <div>{data.interviewDate.slice(4,16)}</div>
                {/* <div>{data.status} <button onClick={() => openModal(data)}>asd</button></div> */}
                <div>{data.status} <button onClick={() => { openDetailsModal(true); setModalData(data) }}>asd</button></div>
            </div>

        </div>
    )
}

export default Reports
