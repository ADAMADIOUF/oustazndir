import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <h4>EXPLORE</h4>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Our Teachers</li>
          <li>Scholarship</li>
          <li>Testimonials</li>
          <li>Teacher Application</li>
          <li>FAQs</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className='footer-section'>
        <h4>CONTACT US</h4>
        <p>Help Center</p>
        <p>USA +1 855 477 2100</p>
        <p>UK +44 20 3287 5211</p>
        <p>AU +61 2 8005 1435</p>
        <p>support@iqranetwork.com</p>
      </div>
      <div className='footer-section'>
        <h4>COURSES</h4>
        <ul>
          <li>Quran Recitation</li>
          <li>Quran Memorization</li>
          <li>Arabic</li>
          <li>Aqeedah</li>
          <li>Hadith</li>
          <li>History</li>
          <li>Fiqh</li>
          <li>Sirah</li>
        </ul>
      </div>
      <div className='footer-section'>
        <h4>FOLLOW US</h4>
        {/* Add social media icons and links here */}
        <p>LISTEN TO OUR PODCAST</p>
        {/* Add podcast link */}
        <p>Download Our App</p>
        {/* Add app store and google play links */}
        <p>WhatsApp</p>
        {/* Add WhatsApp link */}
      </div>
      <div className='footer-section'>
        <h4>JOIN OUR NEWSLETTER</h4>
        <input type='email' placeholder='Your email address' />
        <button>Subscribe</button>
      </div>
      <div className='footer-bottom'>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>© IQRA Network Inc.</p>
        <p>17777 Center Court Drive N Suite 600 Cerritos, CA 90703</p>
      </div>
    </footer>
  )
}

export default Footer
