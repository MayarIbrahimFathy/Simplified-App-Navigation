import React from 'react'

export default function About() {

  const lineStyle = {
    backgroundColor: 'white',
  };

  const starStyle = {
    color : "white",
  };

  return (
    <div className='about'>
      <h1 className='text-white fw-bold'>ABOUT COMPONENT</h1>
      <div className="d-flex align-items-center justify-content-center p-4">
         <div class="line me-3" style={lineStyle}></div>
         <i class="fa-solid fa-star" style={starStyle}></i>
         <div class="line ms-3" style={lineStyle}></div>
         </div>
      <div className="container">
        <div className="row">
        <div className="col-md-6 text-white fs-5">
        <p>Freelancer is a free bootstrap theme created by Route.
           The download includes the complete source files including HTML,
           CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="col-md-6 text-white fs-5">
        <p>Freelancer is a free bootstrap theme created by Route.
           The download includes the complete source files including HTML,
           CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
        </div>
      </div>
    

    </div>
  )
}
