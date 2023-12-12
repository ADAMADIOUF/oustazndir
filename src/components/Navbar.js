import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa' 
import { Link } from 'react-router-dom'
import a from "../assets/logo.png"
const Navbar = () => {
  const [click, setClick] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const toggleLangDropdown = () => setLangDropdown(!langDropdown)

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='logo'>
          <img src={a} alt='' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
              Tarification
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              À propos
            </Link>
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
          <span className='nav-phone'>+221 78 358 78 73</span>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
