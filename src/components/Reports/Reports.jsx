import React from 'react'
import "./reports.scss"

const Reports = ({ data, openModal }) => {

    return (

        <div className="reports">
            <div>
                <div>{data.companyName}</div>
                <div>{data.interviewDate}</div>
                <div>{data.status} <button onClick={() => openModal(data)}>asd</button></div>

            </div>

        </div>
    )
}

export default Reports
