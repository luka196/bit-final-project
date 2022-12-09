import React from 'react'
import "./reportAdmin.scss"
const ReportAdmin = ({data, openModal, setModalData}) => {
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
                <button onClick={() => { openModal(true); setModalData(data) }}><img className='viewBtn'  src="https://cdn.pixabay.com/photo/2016/12/18/11/04/eye-1915455_1280.png" alt=""/></button>
                <button><img className='closeBtn' src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt=""/></button>   
            </div> 
        </div>
    )
}

export default ReportAdmin
