import React from 'react'
import "./candidate.scss"
const Candidate = ({data}) => {
    return (
        <div className="candidate">

            <img src={data?.avatar} alt="Image"/>
            <div>
            <h2>{data?.name}</h2>
            <p>{data?.email}</p>
            </div>

        </div>
        
    )
}

export default Candidate
