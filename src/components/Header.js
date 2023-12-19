import React from 'react'
import a from "../assets/header1.png"
import b1 from '../assets/h1.png'
import b2 from '../assets/h2.png'
import b3 from '../assets/h3.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='header'>
      <div className='header-container section-center'>
        <article className='header-content'>
          <div className='header-line'>
            <svg
              width='20'
              height='68'
              viewBox='0 0 30 68'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='29.9238'
                y='2.73535'
                width='69.8936'
                height='4.89255'
                rx='2.44628'
                transform='rotate(110.99 29.9238 2.73535)'
                fill='#9A3412'
              />
            </svg>
            <svg
              width='20'
              height='68'
              viewBox='0 0 30 68'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='29.9238'
                y='2.73535'
                width='69.8936'
                height='4.89255'
                rx='2.44628'
                transform='rotate(110.99 29.9238 2.73535)'
                fill='#9A3412'
              />
            </svg>
            <svg
              width='20'
              height='68'
              viewBox='0 0 30 68'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='29.9238'
                y='2.73535'
                width='69.8936'
                height='4.89255'
                rx='2.44628'
                transform='rotate(110.99 29.9238 2.73535)'
                fill='#9A3412'
              />
            </svg>
          </div>
          <h3>
            Coran et <span>anglais</span>,
          </h3>
          <h3>
            <span>Rendu </span>totalement facile
          </h3>
          <p>
            Aimez et apprenez le Coran en ligne, un verset à la fois. Nous
            sommes dévoués à vous fournir une expérience d'apprentissage
            exceptionnelle qui est à la fois interactive et captivante.
          </p>
          <Link to={`/booking`}>
            {' '}
            <button className='btn-header'>"Commencez votre voyage</button>
          </Link>
        </article>
        <div>
          <article className='header-img'>
            <img src={a} alt='' className='header-big-img' />
          </article>
          <div className='header-bg-header'>
            <article className='header-bg-content'>
              <h4>Éducation pour une vie supérieure</h4>
              <h5>Avec quoi avez-vous besoin d'aide ?</h5>
              <p>
                Apprenez en ligne des sujets islamiques tels que le Coran, le
                Tajweed, l'Histoire islamique, l'Aqidah et le Fiqh.
              </p>
            </article>
            <article className='small-img'>
              <img src={b1} alt='' />
              <img src={b2} alt='' />
              <img src={b3} alt='' />
            </article>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
