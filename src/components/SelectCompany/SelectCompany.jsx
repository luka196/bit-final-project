import React, {useContext} from 'react'
import Search from '../Search/Search'
import "./selectCompany.scss"
import { dataContext } from '../../context'

const SelectCompany = ({setPage,setCompany}) => {
    const {companies} = useContext(dataContext)
    return (
        <div className="selectCompany">
            <Search/>

            {companies.map((e) => <div className='company' onClick={() => setCompany(e?.name)}>{e.name}</div>)}

            <div>
                <button className="btnWizard" onClick={() => setPage(1)}>BACK</button>
                <button className="btnWizard" onClick={() => setPage(3)}>NEXT</button>
            </div>
        </div>
    )
}

export default SelectCompany
