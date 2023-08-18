import React, { useLayoutEffect } from 'react';
import TransitionEffect from '../components/TransitionEffect';
import IServices from '../interfaces/IServices';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { IoWarning, IoVideocam, IoBriefcase, IoServer, IoSchool, IoStatsChart, IoDocumentText, IoShieldHalf, IoColorFilter, IoFolder, IoCloud, IoCard } from 'react-icons/io5';
import '../styles/Services.css';

const serviceLogos = [
  IoBriefcase,
  IoCloud,
  IoShieldHalf,
  IoFolder,
  IoServer,
  IoCard,
  IoStatsChart,
  IoWarning,
  IoVideocam,
  IoSchool,
  IoColorFilter,
];

interface servicesContentProps {
  servicesContent: IServices
}

const Services = ({ servicesContent } : servicesContentProps) => {

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })

  const iconStyles = ['#7d531c', '#0F4BA0', '#7d531c', '#0F4BA0', '#7d531c', '#0F4BA0', '#7d531c', '#0F4BA0', '#7d531c', '#0F4BA0', '#7d531c']

  const services = Object.keys(servicesContent)
    .filter(key => !key
      .startsWith('_') && key !== 'image' && key !== 'zServices')
      .sort();

  const servicesText = [
    servicesContent.CISO_as_a_Service[0].children[0].text,
    servicesContent.Cloud_security[0].children[0].text,
    servicesContent.Compliance_and_regulatory_requirements[0].children[0].text,
    servicesContent.DevSecOps[0].children[0].text,
    servicesContent.Governance[0].children[0].text,
    servicesContent.Identity_and_access_management[0].children[0].text,
    servicesContent.Information_security_management_system[0].children[0].text,
    servicesContent.Risk_management[0].children[0].text,
    servicesContent.Security_audits[0].children[0].text,
    servicesContent.Security_awareness_and_training[0].children[0].text,
    servicesContent.Third_party_risk_management[0].children[0].text,
  ]

  return (
    <main>
      <Header/>
      <TransitionEffect/>
      <Banner page={'services'}/>
      <section className='services-section'>
        {services.map((service, index) => 
        <article className='services-article'>
          <div className='service-icon-container'>
            {React.createElement(serviceLogos[index], { className: 'service-icon', style: { color: iconStyles[index] } })}
            {/* {React.createElement(serviceLogos[index], { className: 'service-icon', style: { color: '#ad2366' } })} */}
          </div>
          <h4>{service.replaceAll('_', ' ')}</h4>
          <p>{servicesText[index]}</p>
        </article>)}
      </section>
      <Footer/>
    </main>
  )
  
}

export default Services