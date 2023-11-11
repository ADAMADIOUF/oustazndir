import React from 'react'

const Testimonial = ({ videoUrl, name, description, rating }) => {
  const renderStars = () => {
    let stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? '★' : '☆')
    }
    return stars.join('')
  }

  return (
    <div className='testimonial '>
      <div className='testimonial-container section-nav'>
        <div className='video-container-testimonial'>
          <iframe
            src={videoUrl}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Testimonial Video'
          ></iframe>
        </div>
        <div>
          {' '}
          <h3>{name}</h3>
          <p>{description}</p>
          <div className='rating'>{renderStars()}</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
