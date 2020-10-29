import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Logo from './logo.png'






function Header() {
  return (
    <div>
      <header className="header">
        <div className = "col1 logo-container">
        <Link to="/"><img src = {Logo} className ="logo"/></Link>
        </div>

      <div className="col2 menu">
        <Link to="/about"><h3><FontAwesomeIcon icon={faCheck}color="red"/> About</h3></Link>
        <Link to="/car"><h3><FontAwesomeIcon icon={faCarSide} color="red"/> Car</h3></Link>
        <Link to="/contact"><h3><FontAwesomeIcon icon={faAddressCard} color="red"/> Contact</h3></Link>
        <Link to="/search"><h3><FontAwesomeIcon icon={faArrowUp} color="red"/> Search</h3></Link>
    </div>

        <div className="col3 icon-vertical">
        <FontAwesomeIcon  color="red" icon={faFacebook}/>
        <FontAwesomeIcon  color="red"  icon={faTwitter}/>
        <FontAwesomeIcon  color="red"  icon={faInstagram}/>
      </div>


      </header>
    </div>

   );
 }

export default Header;
