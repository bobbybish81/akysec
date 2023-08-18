import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import TransitionEffect from '../components/TransitionEffect';
import IHome from '../interfaces/IHome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

interface homeContentProps {
  homeContent: IHome
}

const Home = ({ homeContent } : homeContentProps) => {

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <main>
      <Header/>
      <TransitionEffect/>
      <section className='intro-section'>
        <article className='intro-article'>
          <h1>{homeContent.intro_1}</h1>
          <p>{homeContent.intro_2}</p>
        </article>
      </section>
      <section className="questions-section">
        <article className="questions-article">
          <h2>Why choose Akysec?</h2>
          <p>{homeContent.Why_choose_Akysec}</p>
        </article>
        <article className="questions-article">
          <h2>What can Akysec do for me?</h2>
          {homeContent.What_can_Akysec_do_for_me?.map((answer, index) => 
            <p key={index}>{answer}</p>
          )}
        </article>
      </section>
      <section className='about-section'>
        <h1>About akysec</h1>
        <div className='about-section-div'>
          <article className='about-article'>
            <div className='about-img-div'>
              <img
                  className='about-img'
                  src={require('../assets/certifications/PECB_1.webp')} alt='logo to appear'/>
              <img
                  className='about-img'
                  src={require('../assets/certifications/PECB_2.webp')} alt='logo to appear'/>
              <img
                  className='about-img'
                  src={require('../assets/certifications/CCSK.webp')} alt='logo to appear'/>
              <img
                  className='about-img' style={{margin: '0'}}
                  src={require('../assets/certifications/CISM.webp')} alt='logo to appear'/>
            </div>
            {homeContent.About_Akysec?.map((text, index) => 
              <p key={index}>{text}</p>
            )}
          </article>
          <article className='about-article'>
            <div className='about-img-div'>
              <img
                className='rounded-circle me-3'
                src={require('../assets/akb.webp')} alt='founder to appear'/>
              <h4>Aicha Kermoury Bish</h4>
            </div>
            {homeContent.founder?.map((text, index) => 
              <p key={index}>{text}</p>
            )}
          </article>
        </div>
        <article className='pricing-article'>
          <h3 className='mb-4'>Pricing</h3>
          {homeContent.Pricing?.map((text, index) => 
            <p key={index}>{text}</p>
          )}
          <p>To set up a free consultation to discuss your business requirements, go to our <Link to='/contact'>Contact</Link> page for further details.</p>
        </article>
      </section>
      <Footer/>
    </main>
  )
  
}

export default Home