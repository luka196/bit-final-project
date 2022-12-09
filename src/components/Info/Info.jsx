import React from 'react'
import "./info.scss"
const Info = ({data,title}) => {
    return (
        <div className="info">
           <div>
                <h2>{title}</h2>
               <p>{data}</p>

           </div>
        </div>
    )
}

export default Info
