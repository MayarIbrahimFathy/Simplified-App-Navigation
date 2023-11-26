import React from 'react'

export default function Portofolio() {
  const lineStyle = {
    backgroundColor: '#2C3E50',
  };

  const starStyle = {
    color : "#2C3E50",
  };
  return (
    <div className='portofolio'>

      <div className="container">
         <h1 className='fw-bold pt-3'>PORTFOLIO COMPONENT</h1>
         <div className="d-flex align-items-center justify-content-center pb-3">
         <div class="line me-3" style={lineStyle}></div>
         <i class="fa-solid fa-star" style={starStyle}></i>
         <div class="line ms-3" style={lineStyle}></div>
         </div>
         <div className="row">
          <div className="col-md-4 pb-5">
            <img src="./img/poert1.png" className='w-100 rounded-2' alt="" />
          </div>
          <div className="col-md-4 pb-5">
            <img src="./img/port2.png" className='w-100 rounded-2' alt="" />
          </div>

          <div className="col-md-4 pb-5">
            <img src="./img/port3.png" className='w-100 rounded-2' alt="" />
          </div>
          <div className="col-md-4 pb-3">
            <img src="./img/poert1.png" className='w-100 rounded-2' alt="" />
          </div>
          <div className="col-md-4 pb-3">
            <img src="./img/port2.png" className='w-100 rounded-2' alt="" />
          </div>
          <div className="col-md-4 pb-3">
            <img src="./img/port3.png" className='w-100 rounded-2' alt="" />
          </div>
         </div>
      </div>
    </div>
  )
}
