import React from 'react'
import './modal.scss'

const Modal = ({name, company, date, phase, status, notes}) => {
  return (
    <div className='modal'>
        <div>
            <div>
                <h2>{name}</h2>
                <button><img className='closeBtn' src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt=""/></button>
            </div>
            <div>
                <p>Company</p>
                <h2></h2>
            </div>
            <div>
                <p>Interview Date</p>
                <h2></h2>
            </div>
            <div>
                <p>Phase</p>
                <h2></h2>
            </div>
            <div>
                <p>Status</p>
                <h2></h2>
            </div>
            <div>
                <p>Notes</p>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Modal