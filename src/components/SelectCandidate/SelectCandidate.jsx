import React, {useContext} from 'react'
import Candidate from '../Candidate/Candidate'
import Search from '../Search/Search'
import "./selectCandidate.scss"
import { dataContext } from '../../context'

const SelectCandidate = ({setPage, selectedCandidate, setCandidate}) => {
    const { candidates } = useContext(dataContext)
    return (
        <div className="selectCandidate">
            <Search/>

            <div>
            {candidates.map((e) => <Candidate  data={e} key={e.id} isSelected={selectedCandidate?.id === e.id} setCandidate={setCandidate}/>)}
            </div>

            <div>
                <button className="btnWizard" onClick={() => setPage(2)}>NEXT</button>
            </div>
        </div>
    )
}

export default SelectCandidate
