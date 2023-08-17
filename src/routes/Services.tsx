import React, { useLayoutEffect } from 'react';
import TransitionEffect from '../components/TransitionEffect';
import IServices from '../interfaces/IServices';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import { IoWarning, IoVideocam, IoBriefcase, IoServer, IoSchool, IoStatsChart, IoDocumentText, IoShieldHalf, IoColorFilter, IoFolder, IoCloud, IoCard } from 'react-icons/io5';
import '../styles/Services.css';

const serviceLogos = [
  IoWarning,
  IoVideocam,
  IoBriefcase,
  IoServer,
  IoSchool,
  IoStatsChart,
  IoDocumentText,
  IoShieldHalf,
  IoColorFilter,
  IoFolder,
  IoCloud,
  IoCard
];

interface servicesContentProps {
  servicesContent: IServices
}

const Services = ({ servicesContent } : servicesContentProps) => {

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <main>
      <Header/>
      <TransitionEffect/>
      <Banner page={'services'}/>
      <section className='services-section'>
        <article className='services-article'>
          {React.createElement(serviceLogos[0], { className: 'service-icon' })}
          <h4>Risk management</h4>
          <p>{servicesContent.Risk_management[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[1], { className: 'service-icon' })}
          <h4>Security audits</h4>
          <p>{servicesContent.Security_audits[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[2], { className: 'service-icon' })}
          <h4>CISO as a service</h4>
          <p>{servicesContent.CISO_as_a_Service[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[3], { className: 'service-icon' })}
          <h4>Governance</h4>
          <p>{servicesContent.Governance[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[4], { className: 'service-icon' })}
          <h4>Security awareness & training</h4>
          <p>{servicesContent.Security_awareness_and_training[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[5], { className: 'service-icon' })}
          <h4>Information security management system</h4>
          <p>{servicesContent.Information_security_management_system[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[7], { className: 'service-icon' })}
          <h4>Compliance & regulatory requirements</h4>
          <p>{servicesContent.Compliance_and_regulatory_requirements[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[8], { className: 'service-icon' })}
          <h4>Third party risk management</h4>
          <p>{servicesContent.Third_party_risk_management[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[9], { className: 'service-icon' })}
          <h4>DevSecOps</h4>
          <p>{servicesContent.DevSecOps[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[10], { className: 'service-icon' })}
          <h4>Cloud security</h4>
          <p>{servicesContent.Cloud_security[0].children[0].text}</p>
        </article>
        <article className='services-article'>
          {React.createElement(serviceLogos[11], { className: 'service-icon' })}
          <h4>Identity and access management</h4>
          <p>{servicesContent.Identity_and_access_management[0].children[0].text}</p>
        </article>
      </section>
      <Footer/>
    </main>
  )
  
}

export default Services