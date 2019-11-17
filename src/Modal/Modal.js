import React from 'react'
import './Modal.css'

const Modal = ({ handleClose, show, children, modalData, modalTitle }) => {
   return (
      <div className={show ? 'modal display-block' : 'modal display-none'}>
         {/* <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section> */}
         <div className='Modal-main'>
            <div className='modal-header'>
               <h4 className='modal-title'>{modalTitle}</h4>
               <button type='button' className='close' onClick={handleClose}>
                  &times;
               </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className='modal-body'>{children}</div>

            {/* <!-- Modal footer --> */}
            <div className='modal-footer'>
               <button
                  type='button'
                  className='btn btn-danger'
                  onClick={handleClose}>
                  Close
               </button>
            </div>
         </div>
      </div>
   )
}
export default Modal
