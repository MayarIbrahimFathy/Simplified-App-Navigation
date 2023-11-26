import React from 'react'

export default function Contact() {
  const lineStyle = {
    backgroundColor: '#2C3E50',
  };

  const starStyle = {
    color : "#2C3E50",
  };

  return (
    <div className='contact'>
      <div className="container">
        <h1 className='fw-bold pt-4'>CONATCT SECTION</h1>
        <div className="d-flex align-items-center justify-content-center pb-2">
         <div class="line me-3" style={lineStyle}></div>
         <i class="fa-solid fa-star" style={starStyle}></i>
         <div class="line ms-3" style={lineStyle}></div>
         </div>
         <div class="mb-3 text-center pt-4 ">
         <input type="text" className="form-control-plaintext w-50 mx-auto border-0" id="userName" placeholder="userName"/>
         <hr className='w-50 mx-auto'/>
         </div>
         <div class="mb-3 text-center pt-3">
         <input type="number" className="form-control-plaintext w-50 mx-auto border-0" id="userAge" placeholder="userAge"/>
         <hr className='w-50 mx-auto'/>
         </div>
         <div class="mb-3 text-center pt-3">
         <input type="email" className="form-control-plaintext w-50 mx-auto border-0" id="userEmail" placeholder="userEmail"/>
         <hr className='w-50 mx-auto'/>
         </div>
         <div class="mb-3 text-center pt-3 pb-4">
         <input type="password" className="form-control-plaintext w-50 mx-auto border-0 " id="userPassword" placeholder="userPassword"/>
         <hr className='w-50 mx-auto'/>
         </div>
         <button className='bg-btn rounded-3 text-white px-3 py-2 mb-5'>Send Message</button>
      </div>
    </div>
  )
}
