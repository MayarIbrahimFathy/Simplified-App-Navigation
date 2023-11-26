import React from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>LOCATION</h2>
            <h6>2215 John Daniel Drive</h6>
            <h6>Clark, MO 65243</h6>
          </div>
          <div className="col-md-4">
            <h2>AROUND THE WEB</h2>
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#ffffff' , padding: '10px 10px' , fontSize: '2rem' }} />
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff', padding: '10px 10px', fontSize: '2rem' }} />
              <FontAwesomeIcon icon={faLinkedinIn} style={{ color: '#ffffff', padding: '10px 10px' , fontSize: '2rem' }} />
              <FontAwesomeIcon icon={faGlobe} style={{ color: '#ffffff', padding: '10px 10px', fontSize: '2rem'  }} />
          </div>
          <div className="col-md-4">
            <h2>ABOUT FREELANCER</h2>
            <h6>Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
