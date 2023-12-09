import React from 'react'
import Header from './Header'
import { FaBook, FaGraduationCap, FaLanguage } from 'react-icons/fa' 
import Works from './Works'
import FirstChat from './FirstChat'
import Iqra from './Iqra'
import Ratings from './Rating'
import Testimonial from './Testimonial'
import BlogHome from './BlogHome'
import Questions from './Questions'
import TopHeader from './TopHeader'
import FirstBanner from './FirstBanner'

const HomePage = () => {
  return (
    <div>
      <TopHeader/>
      <Header />
      <FirstBanner/>
      <div className='home section-center'>
        <div className='home-title'>
          <h3>éducation pour une vie supérieure</h3>
          <p>de quoi avez-vous besoin d'aide?</p>
        </div>
        <div className='home-details'>
          <article className='home-article-1'>
            <span className='icon'>
              <FaBook />
            </span>{' '}
            <h3>récitez et mémorisez le Coran à votre propre rythme</h3>
          </article>
          <article className='home-article-2'>
            <span className='icon'>
              <FaGraduationCap />
            </span>{' '}
            <h3> améliorez vos connaissances islamiques</h3>
            <p>
              étudiez une variété de sujets islamiques tels que le Coran, le
              tajweed, l'histoire islamique, l'aqidah et le fiqh.
            </p>
            <button className='btn'>inscrivez-vous maintenant</button>
          </article>
          <article className='home-article-3'>
            <span className='icon'>
              <FaLanguage />
            </span>

            <h3>parlez arabe en toute confiance !</h3>
          </article>
        </div>
      </div>
      <Works />
      <FirstChat />
      <Iqra />
      <Ratings />
    
      <Testimonial
        
      />
      <BlogHome/>
      <Questions/>
    </div>
  )
}

export default HomePage
