import React, {useContext} from 'react'
import Candidate from '../Candidate/Candidate'
import Search from '../Search/Search'
import "./selectCandidate.scss"
import { dataContext } from '../../context'

const SelectCandidate = ({setPage,setCandidate}) => {
    const { candidates } = useContext(dataContext)
    return (
        <div className="selectCandidate">
            SelectCandidate
            <Search/>
            {candidates.map((e) => <Candidate data={e} setCandidate={setCandidate}/>)}
            <div>
                <button onClick={() => setPage(2)}>NEXT</button>
            </div>
        </div>
    )
}

export default SelectCandidate
