import React from 'react'
import a from '../assets/i.png'
import b from '../assets/i1.png'
import c from '../assets/i2.png'
import d from '../assets/i3.png'
const Iqra = () => {
  return (
    <div className='iqra section-nav'>
      <div className='iqra-title'>
        <h3>Pourquoi Nurul quran</h3>
      </div>
      <div className='iqra-container'>
        <article>
          <img src={a} alt='' />
          <h3>Responsabilité</h3>
          <p>
            Vous avez des objectifs et nous vous aiderons à les atteindre. Avec
            une équipe et un coach en place, vous venez d'augmenter vos chances
            de succès de 65 % ! Vos objectifs deviennent notre priorité.
          </p>
        </article>
        <article>
          <img src={b} alt='' />
          <h3>Innovation</h3>
          <p>
            Pas de programme statique ici. Un curriculum adaptatif pour que vous
            puissiez aller aussi lentement et méthodiquement ou rapidement et
            concentré que vous le souhaitez. Nous combinons votre niveau et
            notre expertise pour créer votre feuille de route optimale pour le
            succès.
          </p>
        </article>
        <article>
          <img src={c} alt='' />
          <h3>Communauté</h3>
          <p>
            Vous devenez comme les cinq personnes les plus proches de vous. Que
            diriez-vous de rejoindre 5 000 personnes comme vous ? L'énergie et
            la motivation au sein de la communauté IQRA sont inégalées. Vous y
            trouverez inspiration, conseils et accès direct à d'autres personnes
            qui visent plus haut.
          </p>
        </article>
        <article>
          <img src={d} alt='' />
          <h3>Héritage</h3>
          <p>
            Laissez votre apprentissage être votre héritage. Le temps est
            précieux et fuyant, rejoignez le programme qui établit la norme pour
            tous les autres. Nos étudiants sont notre héritage, quel sera le
            vôtre ?
          </p>
        </article>
      </div>
    </div>
  )
}

export default Iqra
