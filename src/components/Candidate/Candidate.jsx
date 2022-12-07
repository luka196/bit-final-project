import React from 'react'
import "./candidate.scss"
const Candidate = ({data}) => {
    return (
        <div className="candidate">

            Candidate
            <img src={data?.avatar} alt="Image unavailable"/>
            <div>
            <h2>{data?.name}</h2>
            <p>{data?.email}</p>
            </div>

        </div>
        
    )
}

export default Candidate
