import React from 'react'
import a from "../assets/testi1.png"
import b from '../assets/testi2.png'

const Testimonial = () => {
  

  return (
    <div className='testimonial '>
      <h3>Some Parent Feedback</h3>
      <p>Teacher Sarah makes Quran memorization so fun.</p>
      <div className='testimonial-container section-nav'>
        <article>
          <div className='testi-img'>
            <img src={a} alt='' />
            <img src={b} alt='' />
          </div>
          <p>
            I and my student reciting this surah we ask Allah for his guidance.
            We ask him to show us the right path and help us to stay on the
            right track. When reading surah Al-Fatiha we call Allah by his names
            Ar-Rahman and Ar-Raheem. Which reminds us how merciful Allah is.
          </p>
          <div className='testi-home'>
            <img src={a} alt='' />
            <div>
              <h3>Adama</h3>
              <p>student</p>
            </div>
          </div>
        </article>
        <article>
          <div className='testi-img'>
            <img src={a} alt='' />
            <img src={b} alt='' />
          </div>
          <p>
            I and my student reciting this surah we ask Allah for his guidance.
            We ask him to show us the right path and help us to stay on the
            right track. When reading surah Al-Fatiha we call Allah by his names
            Ar-Rahman and Ar-Raheem. Which reminds us how merciful Allah is.
          </p>
          <div className='testi-home'>
            <img src={a} alt='' />
            <div>
              <h3>Adama</h3>
              <p>student</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Testimonial
