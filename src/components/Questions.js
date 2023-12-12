import React, { useState } from 'react'

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='question'>
      <button className='question-title' onClick={toggle}>
        {question}
      </button>
      {isOpen && <p className='answer'>{answer}</p>}
    </div>
  )
}

const Questions = () => {
  return (
    <div className='questions section-center'>
      <div className='questions-container'>
        <h2>Voici des réponses à certaines questions fréquemment posées</h2>
        <Question
  question="Les cours s'adaptent-ils à mon emploi du temps ?"
  answer='Oui, nos cours sont conçus pour être flexibles et peuvent être programmés selon votre convenance.'
/>
<Question
  question="S'agit-il de leçons préenregistrées ?"
  answer="Non, nos leçons sont dispensées en direct par des instructeurs qualifiés pour offrir une expérience d'apprentissage interactive."
/>
<Question
  question='Où se trouve votre entreprise ?'
  answer='Notre entreprise est basée à [Lieu], mais nous proposons des cours en ligne accessibles dans le monde entier.'
/>
<Question
  question='Comment puis-je commencer ?'
  answer='Vous pouvez commencer en vous inscrivant sur notre site web et en choisissant le cours qui répond à vos besoins.'
/>
</div>
<div className='section-nav'>
  <button className='btn btn-question'>réservez une évaluation gratuite</button>
</div>

    </div>
  )
}

export default Questions
