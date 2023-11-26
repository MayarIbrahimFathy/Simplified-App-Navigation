import React from 'react'
import Footer from '../Footer/Footer'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-custom fs-3 fw-bold">
  <div className="container">
    <a className="navbar-brand fs-2  text-white" href="/" >Start Framework</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active  text-white" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" aria-current="page" href="/portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  text-white" aria-current="page" href="/contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}
