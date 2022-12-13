import React from 'react';
import './modal.scss'

const Modal = ({ closeModal, isOpenModal, children }) => {
    
    return (
        <div className={`modalWrapper ${isOpenModal ? 'modalOpen' : ''}`}>
            <div className='modalContent'>
                <button className='closeButton' onClick={closeModal}><img className='closeBtn' src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt=""/></button>
                {children}
            </div>
        </div>
    )
}

export default Modal