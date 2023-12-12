import React from 'react'


const Pricing = () => {
  return (
    <div className='pricing-container'>
      <div className='pricing-tier'>
        <h3>Meilleure Expérience</h3>
        <h2>Élite</h2>
        <p className='price'>16 $ /heure</p>
        <button>COMMENCER</button>
        {/* Ajoutez le reste des détails pour le plan Élite */}
      </div>

      <div className='pricing-tier'>
        <h3>Meilleur Rapport Qualité-Prix</h3>
        <h2>Pro</h2>
        <p className='price'>11,00 $ /heure</p>
        <button>COMMENCER</button>
        {/* Ajoutez le reste des détails pour le plan Pro */}
      </div>

      <div className='pricing-tier'>
        <h3>Essentiels</h3>
        <h2>9,00 $ /heure</h2>
        <p className='price'></p>
        <button>COMMENCER</button>
        {/* Ajoutez le reste des détails pour le plan Essentiels */}
      </div>

      <div className='pricing-tier'>
        <h3>Simple</h3>
        <h2>8 $ /heure</h2>
        <p className='price'></p>
        <button>COMMENCER</button>
        {/* Ajoutez le reste des détails pour le plan Simple */}
      </div>

      <div className='pricing-notes'>
        <p>
          *Les annulations ou modifications de l'horaire doivent être soumises
          via le tableau de bord de l'étudiant au moins 4 heures avant le début
          du cours.
        </p>
        <p>
          **Le report doit être effectué dans les 90 jours suivant le cours
          original.
        </p>
        <p>
          ***Les réductions sont applicables lorsque 2 étudiants ou plus
          s'inscrivent au même plan. Les réductions ne sont pas appliquées pour
          les cours en groupe.
        </p>
      </div>
    </div>
  )
}

export default Pricing
