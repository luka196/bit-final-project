import React, {useContext, useState} from 'react'
import Search from '../Search/Search'
import "./selectCompany.scss"
import { dataContext } from '../../context'

const SelectCompany = ({setPage,setCompany,selectedCompany}) => {
    const {companies} = useContext(dataContext)
    const [message, setMessage ] = useState("")

    const nextClick = () =>{
        if(selectedCompany)
            setPage(3)
        else setMessage("COMPANY IS NOT SELECTED !!!")
    }


    return (
        <div className="selectCompany">
            <Search/>

            {companies.map((e) => <div key={e.id} className={`${selectedCompany === e.name ? "click" : ""} company`}  onClick={() => {setCompany(e.name);setMessage("")}}>{e.name}</div>)}

            <div>
                <button className="btnWizard" onClick={() => setPage(1)}>BACK</button>
                <div className='btn-msg'>
                    <button className="btnWizard" onClick={nextClick}>NEXT</button>
                    <p className='msg'>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default SelectCompany
