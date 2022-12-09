import React, {useContext, useState} from 'react'
import Search from '../Search/Search'
import "./selectCompany.scss"
import { dataContext } from '../../context'

const SelectCompany = ({setPage,setCompany,selectedCompany}) => {
    const {companies} = useContext(dataContext)

    return (
        <div className="selectCompany">
            <Search/>

            {companies.map((e) => <div key={e.id} className={`${selectedCompany === e.name ? "click" : ""} company`}  onClick={() => setCompany(e.name)}>{e.name}</div>)}

            <div>
                <button className="btnWizard" onClick={() => setPage(1)}>BACK</button>
                <button className="btnWizard" onClick={() => setPage(3)}>NEXT</button>
            </div>
        </div>
    )
}

export default SelectCompany
