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
        <h2>Here are responses to some frequently-asked questions</h2>
        <Question
          question='Do the classes fit my schedule?'
          answer='Yes, our classes are designed to be flexible and can be scheduled according to your convenience.'
        />
        <Question
          question='Are these pre-recorded lessons?'
          answer='No, our lessons are conducted live by qualified instructors to provide interactive learning experiences.'
        />
        <Question
          question='Where is your company located?'
          answer='Our company is based in [Location], but we offer online classes that can be accessed globally.'
        />
        <Question
          question='How do I start?'
          answer='You can start by signing up on our website and choosing the course that fits your needs.'
        />
      </div>
      <div className="section-nav">
        <button className="btn btn-question">book free evaluation</button>
      </div>
    </div>
  )
}

export default Questions
