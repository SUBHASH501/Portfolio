import React from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'

const modal=({closeModal})=>{
          return ReactDOM.createPortal(
              <div onClick={closeModal} className="modal-overlay">
                  <div onClick={(e)=>e.stopPropagation()} className="modal-container">
                      <div className="upper-section">
                        <h1>Huge Announcement</h1>
                        <p onClick={closeModal}  className='close'>&times;</p>
                      </div>
                      <div className="middle-section">
                             <h3>React Mega Tutorial is Live!</h3>
                             <p>Do your wish to learn React</p>
                             <p>I've published a completely FREE react tutorial ,check it out today</p>
                             <p>I bring to you this mega course where each month I will help you learn about these libraries and framework
                             </p>
                      </div>
                      <div className="lower-section">
                                <a onclick={closeModal} className="modal-btn btn-red">Close</a>
                                 <a href="http://theleanProgrammer.com/aam/" target="_blank" rel="nonreferrer" className='modal-btn btn-green'>Start Tutorial</a>
                      </div>
                  </div>
              </div>,document.getElementById('modal')
          );
}

export default modal;