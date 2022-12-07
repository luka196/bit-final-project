import React from 'react'
import "./reportAdmin.scss"
const ReportAdmin = ({data}) => {
    return (
        <div className="reportAdmin">
    
           <div>
               <p>{data?.companyName}</p>
               <span>Company</span>
           </div>
           <div>
               <p>{data?.candidateName}</p>
               <span>Candidate</span>
            </div> 
           <div>
               <p>{data?.interviewDate.slice(4,16)}</p>
               <span>Interview Date</span>
            </div> 
           <div>
               <p>{data.status}</p>
               <span>Status</span>
            </div> 
           <div>
                <button><img src="" alt="dugmeSlika"/></button>
                <button><img src="" alt="dugmeSlika"/></button>   
            </div> 
        </div>
    )
}

export default ReportAdmin
