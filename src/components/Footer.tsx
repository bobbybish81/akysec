import React from 'react';
// import { BsTelephoneFill } from 'react-icons/bs';
import '../styles/Footer.css';

const Footer = () => {

  return (
    <footer>
      <div className='footer-div'>
        <img className='footer-img'
            src={require('../assets/logo-white.webp')} alt='logo to appear'/>
        <p className='footer-img-text'>Sweden • United Kingdom • Europe</p>
      </div>
      <div className='footer-div'>
        <a href='https://akysec.com'><p className='footer-text'>www.akysec.com</p></a>
      </div>
      <div className='footer-div'>
        <p className='footer-text text-end'>Website developed by <a
            href='https://robertbishwebdeveloper.com'
            target='_blank'
            rel='noreferrer'>
            <b>Robert Bish</b>
          </a>
        </p>
      </div>
      {/* <a className='mobile-tel' href='tel:+46736411700'><BsTelephoneFill className='tel-icon'/>073-641 17 00</a> */}
    </footer>
  )
}

export default Footer