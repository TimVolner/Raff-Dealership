import React from 'react';
import { Link } from 'react-router-dom';
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'




function Footer() {
  return (
    <div>
      <footer className="footer">

        <div className = "col1 logo-container">

        </div>

      <div className="col2 menu">
        <Link to="/information"><h3><FontAwesomeIcon icon={faClipboard}color="red"/> Information</h3></Link>
        <Link to="/location"><h3><FontAwesomeIcon icon={faBuilding} color="red"/> Location</h3></Link>

    </div>

        <div className="col3 icon-vertical">

      </div>


      </footer>
    </div>

   );
 }

export default Footer;
