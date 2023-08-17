import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { IoClose, IoMenu } from 'react-icons/io5';
import '../styles/Header.css';


const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    openMenu === true ? setOpenMenu(false) : setOpenMenu(true);
  };

  const menuStyles = {
    Active: {
      height: '25rem',
      borderBottom: '2px solid #4C102D'
    },
    Inactive: {
      height: '0',
      borderBottom: 'none'
    }
  }

  return (
    <header>
      <div className='mobile-menu' style={openMenu ? menuStyles.Active : menuStyles.Inactive}>
        <ul>
          <Link to='/' className='mobile-navlink'>
            <li onClick={menuToggle}><FaHome className='link-icon'/>Home</li>
          </Link>
          <Link to='/services' className='mobile-navlink'>
            <li onClick={menuToggle}><FaBriefcase className='link-icon'/>Services</li>
          </Link>
          <Link to='/contact' className='mobile-navlink'>
            <li onClick={menuToggle}><FaEnvelope className='link-icon'/>Contact</li>
          </Link>
        </ul>
      </div>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <Link to={'/'}>
            <img className='header-logo'
              src={require('../assets/logo.webp')} alt='logo to appear'/>
          </Link>
          {openMenu ? <IoClose className='menu-closebtn' onClick={menuToggle}/> :
          <IoMenu className='menu-openbtn' onClick={menuToggle}/>}
          <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
            <ul className='desktop-nav-links'>
              <NavLink className={({isActive}) => isActive ? 'active-link': 'non-active-link' } to={'/'}>
                <li><FaHome className='link-icon'/>Home</li>
              </NavLink>
              <NavLink className={({isActive}) => isActive ? 'active-link': 'non-active-link' } to={'/services'}>
                <li><FaBriefcase className='link-icon'/>Services</li>
              </NavLink>
              <NavLink className={({isActive}) => isActive ? 'active-link': 'non-active-link' } to={'/contact'}>
                <li><FaEnvelope className='link-icon'/>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
  
}

export default Header