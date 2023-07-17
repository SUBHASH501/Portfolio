import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer({phrase,link,toaddress}) {
  return (
    <div>
      <div className="footer-link">
          {phrase}
          <Link to={toaddress} className="footer-link-element">
          {link}
          </Link>
      </div>
    </div>
  )
}

export default Footer
