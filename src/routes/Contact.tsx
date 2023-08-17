import React, { useLayoutEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
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
      <section className='mobile-contact-section'>
        <Banner page={'contact'}/>
        <article className='contact-article'>
          {/* <div>
            <h2>Contact Akysec today</h2>
            <p>Send us a message or ask a question using this form. We will get back to you as soon as possible</p>
            <h5>Akysec Customer Services</h5>
            <br></br>
          </div> */}
          {/* <ContactForm/> */}
          <ContactText/>
        </article>
      </section>
      <section className='desktop-contact-section'>
        <Banner page={'contact'}/>  
        <article className='contact-article'>
          {/* <ContactForm/> */}
          <ContactText/>
          <div>
            <h4>Get in touch today</h4>
            <p>Expect a reply within 24 hours</p> 

            <h4>Wherever you are</h4>
            <p>Our clients are in the UK, Europe and the US.</p>
            <p>We are based in Stockholm, Sweden</p>

            <h4>Send us a message​​</h4>
            <div className='email-btn'>
              <MdOutlineEmail className='email-logo'/>
              <a className='mailtoui' href='mailto:aicha@akysec.com'>aicha@akysec.com</a>
            </div>
          </div>
        </article>
      </section>
      <Footer/>
    </main>
  )
  
}

export default Contact