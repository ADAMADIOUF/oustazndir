import React, { useState } from 'react'
import a from '../assets/about-img.png'
import b1 from '../assets/about1.png'
import b2 from '../assets/about2.png'
import b3 from '../assets/about3.png'
import b4 from '../assets/about4.png'
import b5 from '../assets/about-quote.png'
import b6 from '../assets/about-mission.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'



import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import m4 from '../assets/m4.png'
import m5 from '../assets/m5.png'
import m6 from '../assets/m6.png'
import m7 from '../assets/m7.png'
import m8 from '../assets/m8.png'
import mp1 from "../assets/a.mp4"
import mp2 from '../assets/2.mp4'
import mp3 from '../assets/3.mp4'
import mp4 from '../assets/4.mp4'
import FirstBanner from './FirstBanner'




const About = () => {
  

  const [videoVisible, setVideoVisible] = useState({
    mp1: false,
    mp2: false,
    mp3: false,
    mp4: false,
  })

  const playVideo = (videoKey) => {
    setVideoVisible({ ...videoVisible, [videoKey]: true })
  }

  const closeVideo = (videoKey) => {
    setVideoVisible({ ...videoVisible, [videoKey]: false })
  }

  return (
    <div className='about section-center'>
      <div className='about-container'>
        <article className='header-content'>
          <h3>
            Á popos <span>Nurul Quran</span>,
          </h3>
          <h3>
            <span>Facile </span>à vivre
          </h3>
          <p>
            Nous embrassons la diversité et croyons en la démocratisation de
            l'enseignement du Coran pour les personnes de tous horizons et de
            toutes conditions. Nous nous efforçons continuellement d'améliorer
            et d'innover notre plateforme, en utilisant la technologie pour
            faciliter une expérience coranique fluide et enrichissante.
          </p>
        </article>
        <article className='about-flex'>
          <div>
            <article className='mission-img'>
              <img src={a} alt='' />
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
              <article className='small-img-about'>
                <img src={b1} alt='' />
                <img src={b2} alt='' />
                <img src={b3} alt='' />
                <img src={b4} alt='' />
              </article>
            </div>
          </div>
        </article>
      </div>

      <div className='about-testi'>
        <img src={b5} alt='' />
        <h3>Et dis : 'Mon Seigneur, augmente-moi en savoir.</h3>
        <div className='about-testi-container'>
          <p>Écoutez et prêtez l'oreille, Aux paroles d'Allah.</p>
          <p>Surah Ta-Ha, verse 20:114</p>
        </div>
      </div>

      <div className='about-mission'>
        <div className='about-mission-container'>
          <article>
            <h3>NurulQuran</h3>
            <h3>
              La mission est <span>d'apporter</span>
            </h3>
            <h3>
              <span>Les meilleurs enseignants du Coran pour les familles.</span>
            </h3>
            <h3>Dans le confort de leurs foyers.</h3>
          </article>
          <article className='mission-img'>
            <img src={b6} alt='' />
          </article>
        </div>
      </div>
      <div className='about-container-2'>
        <article>
          <img src={m1} alt='' />
        </article>
        <article>
          <h3>À Propos de Nous - Nurul Quran</h3>
          <p>
            Bienvenue chez Nurul Quran, votre destination privilégiée pour
            apprendre le Coran de manière simple et efficace. Notre mission est
            de rendre l'apprentissage du Coran accessible à tous, indépendamment
            de leur origine ou de leur niveau de connaissances préalables.
          </p>
        </article>
        <article>
          <img src={m2} alt='' />
        </article>
        <article>
          <h3>Des Cours Conçus pour Tous</h3>
          <p>
            Chez Nurul Quran, nous croyons que l'apprentissage du Coran doit
            être une expérience ouverte à tous. C'est pourquoi nos cours sont
            conçus pour accueillir des étudiants de tous les horizons, offrant
            une plateforme inclusive et accueillante pour tous ceux qui
            cherchent à se connecter avec les enseignements sacrés de l'Islam.
          </p>
        </article>
        <article>
          <img src={m3} alt='' />
        </article>
        <article>
          <h3>Un Programme en Trois Leçons</h3>
          <p>
            Notre programme unique se déroule en seulement trois leçons, chacune
            étant soigneusement structurée pour vous guider à travers les
            aspects fondamentaux du Coran. Que vous soyez débutant ou que vous
            cherchiez à approfondir vos connaissances, nos leçons sont adaptées
            pour fournir une compréhension complète et enrichissante.
          </p>
        </article>
        <article>
          <img src={m4} alt='' />
        </article>
        <article>
          <h3>Des Enseignants Qualifiés</h3>
          <p>
            Nos enseignants sont des experts passionnés par le partage de leur
            savoir. Ils utilisent des méthodes d'enseignement éprouvées pour
            assurer une expérience d'apprentissage engageante et profonde,
            permettant à chaque étudiant de progresser à son propre rythme.
          </p>
        </article>
        <article>
          <img src={m5} alt='' />
        </article>
        <article>
          <h3>Technologie et Innovation </h3>
          <p>
            Nous utilisons les dernières technologies pour offrir une expérience
            d'apprentissage interactive et immersive. Notre plateforme est
            facile à utiliser, garantissant un accès sans obstacle à l'éducation
            coranique de qualité, où que vous soyez.
          </p>
        </article>
        <article>
          <img src={m6} alt='' />
        </article>
        <article>
          <h3>Rejoignez-nous sur le Chemin de la Connaissance </h3>
          <p>
            Nous vous invitons à débuter votre voyage d'apprentissage avec Nurul
            Quran. Découvrez la beauté et la sagesse du Coran à travers nos
            cours conçus pour éclairer, inspirer et enrichir.
          </p>
        </article>
      </div>
      <div className='about-mission'>
        <div className='about-mission-container'>
          <article>
            <h3>Améliorer la compréhension orale</h3>
            <h3>
              Objectif visant à renforcer les <span>compétences </span>
            </h3>
            <h3>
              <span>d'écoute pour une meilleure .</span>
            </h3>
          </article>
          <article className='mission-img'>
            <img src={m7} alt='' />
          </article>
        </div>
      </div>
      <div className='about-container-2'>
        <article>
          <img src={m8} alt='' />
        </article>
        <article>
          <h3>NurulQuran</h3>
          <h3>
            <span>
              Acquérir des connaissances islamiques et mettre en pratique les
              enseignements coraniques
            </span>
          </h3>
        </article>
      </div>
      <div className='last-banner-video'>
        <article className='big-video'>
          {videoVisible.mp1 && (
            <>
              <video src={mp1} controls></video>
              <button
                className='close-button'
                onClick={() => closeVideo('mp1')}
              >
                X
              </button>
            </>
          )}
          {!videoVisible.mp1 && (
            <>
              <img
                src={c1}
                alt='Video Thumbnail'
                onClick={() => playVideo('mp1')}
              />
              <button className='play-button' onClick={() => playVideo('mp1')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='30'
                  height='35'
                  viewBox='0 0 30 35'
                  fill='none'
                >
                  <path
                    d='M29.8828 17.1L0.258671 34.2035L0.258671 -0.00349236L29.8828 17.1Z'
                    fill='white'
                  />
                </svg>
              </button>
            </>
          )}
        </article>

        <article className='small-video'>
          <div>
            {videoVisible.mp2 && (
              <>
                <video src={mp2} controls></video>
                <button
                  className='close-button'
                  onClick={() => closeVideo('mp2')}
                >
                  X
                </button>
              </>
            )}
            {!videoVisible.mp2 && (
              <>
                <img
                  src={c2}
                  alt='Video Thumbnail'
                  onClick={() => playVideo('mp2')}
                />
                <button
                  className='play-button'
                  onClick={() => playVideo('mp2')}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='35'
                    viewBox='0 0 30 35'
                    fill='none'
                  >
                    <path
                      d='M29.8828 17.1L0.258671 34.2035L0.258671 -0.00349236L29.8828 17.1Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
          <div>
            {videoVisible.mp3 && (
              <>
                <video src={mp3} controls></video>
                <button
                  className='close-button'
                  onClick={() => closeVideo('mp3')}
                >
                  X
                </button>
              </>
            )}
            {!videoVisible.mp3 && (
              <>
                <img
                  src={c3}
                  alt='Video Thumbnail'
                  onClick={() => playVideo('mp3')}
                />
                <button
                  className='play-button'
                  onClick={() => playVideo('mp3')}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='35'
                    viewBox='0 0 30 35'
                    fill='none'
                  >
                    <path
                      d='M29.8828 17.1L0.258671 34.2035L0.258671 -0.00349236L29.8828 17.1Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
          <div>
            {videoVisible.mp4 && (
              <>
                <video src={mp4} controls></video>
                <button
                  className='close-button'
                  onClick={() => closeVideo('mp4')}
                >
                  X
                </button>
              </>
            )}
            {!videoVisible.mp4 && (
              <>
                <img
                  src={c4}
                  alt='Video Thumbnail'
                  onClick={() => playVideo('mp4')}
                />
                <button
                  className='play-button'
                  onClick={() => playVideo('mp4')}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='35'
                    viewBox='0 0 30 35'
                    fill='none'
                  >
                    <path
                      d='M29.8828 17.1L0.258671 34.2035L0.258671 -0.00349236L29.8828 17.1Z'
                      fill='white'
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </article>
      </div>
      <FirstBanner />
    </div>
  )
}

export default About
