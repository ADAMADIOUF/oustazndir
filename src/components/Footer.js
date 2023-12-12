import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container section-center'>
        <article>
          <h4>EXPLORER</h4>
          <ul>
            <li>À propos</li>
            <li>Blog</li>

            <li>FAQ</li>
          </ul>
        </article>
        <article>
          <div className='footer-section'>
            <h4>CONTACTEZ-NOUS</h4>
            <p>Centre d'aide</p>
            <p>SENEGAL +221 78 358 78 73</p>

            <p>oustazabndir@gmail.com</p>
          </div>
        </article>
        <article>
          <div className='footer-section'>
            <h4>COURS</h4>
            <ul>
              <li>Récitation du Coran</li>
              <li>Mémorisation du Coran</li>

              <li>Aqeedah</li>
              <li>Hadith</li>
              <li>Histoire</li>
              <li>Fiqh</li>
              <li>Sirah</li>
            </ul>
          </div>
        </article>
        <article>
          <div className='footer-section'>
            <h4>SUIVEZ-NOUS</h4>

            <p>WhatsApp</p>
          </div>
        </article>
      </div>
      <div className='footer-bottom'>
        <p>Conditions d'utilisation</p>
        <p>Politique de confidentialité</p>
        <p>© Nurul quran.</p>
        <p>Senegal,Dakar</p>
      </div>
    </footer>
  )
}

export default Footer
