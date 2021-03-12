import React from 'react'
import './footer.css'
import {FaTwitter,FaFacebook,FaGoogle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <Link to='https:google.com' className='footer-item'><FaGoogle color='white' size='20px'/></Link>
                <Link to='https:twitter.com'  className='footer-item'><FaTwitter color='white' size='20px'/></Link>
                <Link to='https:facebook.com'  className='footer-item'><FaFacebook color='white' size='20px'/></Link>
            </div>
            <p className="bottom">Copyright © Brand 2020</p>
        </div>
    )
}

export default Footer
