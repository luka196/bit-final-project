import React from 'react'
import './modal.scss'

const Modal = ({data,closeModal}) => {
    console.log(data)
  return (
    <div className='modal'>
        <div>
            <div>
                <h2>{data.candidateName}</h2>
                <button onClick={() => closeModal(false)}><img className='closeBtn' src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt=""/></button>
            </div>
            <div>
                <div>
                    <p>Company</p>
                    <h2>{data.companyName}</h2>
                </div>
                <div>
                    <p>Interview Date</p>
                    <h2>{data.interviewDate.slice(4,16)}</h2>
                </div>
                <div>
                    <p>Phase</p>
                    <h2>{data.phase}</h2>
                </div>
                <div>
                    <p>Status</p>
                    <h2>{data.status}</h2>
                </div>
            </div>
            <div>
                <p>Notes</p>
                <p>{data.note}</p>
            </div>
        </div>
    </div>
  )
}

export default Modal