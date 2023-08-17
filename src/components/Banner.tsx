import React from 'react';
import '../styles/Banner.css';

interface BannerProps {
  page: string
}

const Banner = ({ page } : BannerProps) => {

  return (
      <section className='banner-section'>
        {page === 'services' ?
        <div>
          <h1 className='services-h1'>Our Services</h1>
          <h4 className='services-h4'>What we do</h4>
        </div> :
        <div>
          <h1 className='contact-h1'>Contact Akysec</h1>
        </div>
        }
      </section>
  )
  
}

export default Banner