import React from 'react';
import { Link } from 'react-router-dom';
import TransitionEffect from '../components/TransitionEffect';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Error.css';

const Error = () => {

  return (
    <main>
      <TransitionEffect/>
      <Header/>
      <section className='error-section'>
        <article className='error-article'>
          <h1>Sorry! Page Not found</h1>
          <Link
            className='error-link' to={'/'}>
            <p>Return to Homepage</p>
          </Link>
        </article>
      </section>
      <Footer/>
    </main>
  )

}

export default Error