import React from 'react'


export default function Home() {
  const lineStyle = {
    backgroundColor: 'white',
  };

  const starStyle = {
    color : "white",
  };

  return (
    <>
    <div className="home">
      <div className="container">
        <img className='img' src="./img/avataaars.svg" alt="" />
         <h1 className='text-white fw-bold pt-5'>START FRAMEWORK</h1>
         <div className="d-flex align-items-center justify-content-center pb-2">
         <div class="line me-3" style={lineStyle}></div>
         <i class="fa-solid fa-star" style={starStyle}></i>
         <div class="line ms-3" style={lineStyle}></div>
         </div>
         <p className='text-white fs-bold'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </>
  )
}
