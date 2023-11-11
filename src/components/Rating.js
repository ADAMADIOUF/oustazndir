import React from 'react'

const Rating = ({ source, rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <div className='rating'>
      <h2>{source}</h2>
      <p className='stars'>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </p>
    </div>
  )
}

const Ratings = () => {
  return (
    <div className='rating-container section-nav'>
      <Rating source='Trustpilot' rating={4.8} />
      <Rating source='Facebook' rating={5.0} />
      <Rating source='Google' rating={4.8} />
    </div>
  )
}

export default Ratings
