import React from 'react'
import a from "../assets/testi1.png"
import b from '../assets/testi2.png'
import c from '../assets/student1.png'
import d from '../assets/student2.png'



const Testimonial = () => {
  

  return (
    <div className='testimonial '>
      <h3>Quelques retours de parents</h3>
      <p>
        Oustaz Badara Ndir rend la mémorisation du Coran tellement amusante.
      </p>
      <div className='testimonial-container section-nav'>
        <article>
          <div className='testi-img'>
            <img src={a} alt='' />
            <img src={b} alt='' />
          </div>
          <p>
            Mon élève et moi récitons cette sourate et demandons à Allah de nous
            guider. Nous lui demandons de nous montrer le droit chemin et de
            nous aider à rester sur la bonne voie. Lors de la lecture de la
            sourate Al-Fatiha, nous invoquons Allah par ses noms Ar-Rahman et
            Ar-Raheem, ce qui nous rappelle combien Allah est miséricordieux.
          </p>
          <div className='testi-home'>
            <img src={c} alt='' />
            <div>
              <h3>Demab Fall</h3>
              <p>Èleve</p>
            </div>
          </div>
        </article>
        <article>
          <div className='testi-img'>
            <img src={a} alt='' />
            <img src={b} alt='' />
          </div>
          <p>
            Ensemble, mon élève et moi pratiquons la récitation de cette
            sourate, en priant Allah pour qu'Il nous oriente. Nous sollicitons
            Sa clémence pour qu'Il nous éclaire sur la voie de la rectitude et
            nous soutienne dans notre quête de la vérité. À travers la
            récitation de la sourate Al-Fatiha, nous évoquons les noms d'Allah,
            Ar-Rahman et Ar-Raheem, nous remémorant ainsi l'immense bonté et la
            miséricorde infinie d'Allah.
          </p>
          <div className='testi-home'>
            <img src={d} alt='' />
            <div>
              <h3>ANta Diop</h3>
              <p>Èleve</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Testimonial
