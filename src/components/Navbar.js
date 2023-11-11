import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' // Keep only the icons that are available
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const toggleLangDropdown = () => setLangDropdown(!langDropdown)

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href='/' className='navbar-logo'>
          LOGO
        </a>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
             Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
              Pricing
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className='nav-item' onClick={toggleLangDropdown}>
            <span className='nav-links'>
              Languages <i className='fas fa-caret-down'></i>
            </span>
            {langDropdown && (
              <div className='dropdown-menu'>
                <a href='#' className='dropdown-item' onClick={closeMobileMenu}>
                  <img src='/path/to/us-flag.png' alt='US Flag' /> English
                </a>
                <a href='#' className='dropdown-item' onClick={closeMobileMenu}>
                  <img src='/path/to/france-flag.png' alt='France Flag' />{' '}
                  Français
                </a>
              </div>
            )}
          </li>
          <li className='nav-item'>
            <a
              href='/book-free-evaluation'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Book Free Evaluation
            </a>
          </li>
          <span className='nav-phone'>+123456789</span>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
