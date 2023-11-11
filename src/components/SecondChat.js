import React from 'react'
const SecondChat = () => {
  return (
    <div className='first-chat section-nav'>
      <div className='video-background-container'>
        <div className='video-container'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/ZQBO3BRUqSo?si=_aGQ06wlxweJSeNE'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default SecondChat
