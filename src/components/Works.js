import React from 'react'
import { FaRegCalendarAlt, FaClock, FaBookOpen } from 'react-icons/fa'

const Works = () => {
  return (
    <div className='works'>
      <div className='work-title section-center'>
        <h3>comment ça marche</h3>
      </div>
      <div className='work-container '>
        <article>
          <span className='icon-work'>
            <FaRegCalendarAlt />
          </span>{' '}
          <h2>1</h2>
          <h3>planification</h3>
          <p>choisissez un cours et créez votre objectif</p>
        </article>
        <article>
          <span className='icon-work'>
            <FaClock />
          </span>{' '}
          <h2>2</h2>
          <h3>organisation</h3> {/* Modification ici */}
          <p>partagez vos disponibilités et organisez votre emploi du temps</p>
        </article>
        <article>
          <span className='icon-work'>
            <FaBookOpen />
          </span>{' '}
          <h2>3</h2>
          <h3>étude</h3>
          <p>payez et commencez vos cours</p>
        </article>
      </div>
      <h3>c'est vraiment aussi simple !</h3>
      <button className='btn-header'>commencez à apprendre</button>
    </div>
  )
}

export default Works
