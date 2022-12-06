import React from 'react'
import Search from '../Search/Search'
import "./selectCompany.scss"
const SelectCompany = () => {
    return (
        <div className="selectCompany">
            SelectCompany
            <Search/>
            <div>Company 1</div>
            <div>
                <button>BACK</button>
                <button>NEXT</button>
            </div>
        </div>
    )
}

export default SelectCompany
