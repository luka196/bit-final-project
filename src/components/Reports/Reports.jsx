import React from 'react'
import "./reports.scss"

const Reports = ({ data, openModal, setModalData }) => {

    return (

        <div className="reports">
            <div>
                <div>{data.companyName}</div>
                <div>{data.interviewDate.slice(4,16)}</div>
                {/* <div>{data.status} <button onClick={() => openModal(data)}>asd</button></div> */}
                <div>{data.status} <button onClick={() => { openModal(true); setModalData(data) }}>asd</button></div>
            </div>

        </div>
    )
}

export default Reports
