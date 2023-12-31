import React, { useLayoutEffect } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import TransitionEffect from '../components/TransitionEffect';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ContactText from '../components/ContactText';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <main>
      <TransitionEffect/>
      <Header/>
      <section className='contact-section'>
        <Banner page={'contact'}/>  
        <article className='contact-article'>
          <ContactText/>
          <div className='contact-info'>
            <h2>Get in touch today</h2>
            <p>We are dedicated to safeguarding your information and ensuring your business remains resilient against persistent threats. If you're ready to enhance your security, don't hesitate to reach out.</p>
            <hr/>
            <h5>Contact Us</h5>
            <div className='contact'>
              <MdOutlineAlternateEmail className='react-icon'/>
              <a href='mailto:info@akysec.com'>info@akysec.com</a>
            </div>
            <div className='contact'>
              <BsFillTelephoneFill className='react-icon'/>
              <a href='tel:+46736411700'>+46 73 641 1700</a>
            </div>
            <div className='contact'>
              <BsLinkedin className='react-icon'/>
              <a
                href='https://www.linkedin.com/company/akysec'
                target='_blank'
                rel='noreferrer'>Follow us on Linkedin</a>
            </div>
            <hr/>
            <h6 className='mt-4'>Sweden • United Kingdom • Europe</h6>
          </div>
        </article>
      </section>
      <Footer/>
    </main>
  )
  
}

export default Contact