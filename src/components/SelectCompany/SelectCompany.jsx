import React, {useContext} from 'react'
import Search from '../Search/Search'
import "./selectCompany.scss"
import { dataContext } from '../../context'

const SelectCompany = ({setPage,setCompany}) => {
    const {companies} = useContext(dataContext)
    return (
        <div className="selectCompany">
            SelectCompany
            <Search/>
            {companies.map((e) => <div onClick={() => setCompany(e?.name)}>{e.name}</div>)}
            <div>
                <button onClick={() => setPage(1)}>BACK</button>
                <button onClick={() => setPage(3)}>NEXT</button>
            </div>
        </div>
    )
}

export default SelectCompany
