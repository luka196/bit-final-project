import React from 'react'
import Candidate from '../Candidate/Candidate'
import Search from '../Search/Search'
import "./selectCandidate.scss"
const SelectCandidate = () => {
    return (
        <div className="selectCandidate">
            SelectCandidate
            <Search/>
            <Candidate/>
            <div>
                <button>NEXT</button>
            </div>
        </div>
    )
}

export default SelectCandidate
