import React from 'react'
import  a from "../assets/post.png"
import b from '../assets/post1.png'
import c from '../assets/post2.png'
import d from '../assets/post3.png'
import e from '../assets/post4.png'






const BlogHome = () => {
  return (
    <div className='blog-home'>
      <div className='container-blog section-center'>
        <article>
          <img src={a} alt='' className='blog-big-img' />
          <p>22 octobre 2023 18:56</p>
          <h3>
            <h3>Dernier article</h3>
          </h3>
        </article>

        <article className='blog-small-img'>
          <article>
            <div className='small-img-flex'>
              <img src={b} alt='' />
              <div>
                <p>12 novembre 2023 22:56</p>
                <h3>
                  <h3>Dernier article</h3>
                </h3>
              </div>
            </div>
          </article>
          <article>
            <div className='small-img-flex'>
              <img src={c} alt='' />
              <div>
                <p>12 decembre 2023 8:36</p>
                <h3>
                  <h3>Dernier article</h3>
                </h3>
              </div>
            </div>
          </article>
          <article>
            <div className='small-img-flex'>
              <img src={d} alt='' />
              <div>
                <p>02 decembre 2023 11:16</p>
                <h3>
                  <h3>Dernier article</h3>
                </h3>
              </div>
            </div>
          </article>
          <article>
            <div className='small-img-flex'>
              <img src={e} alt='' />
              <div>
                <p>22 octobre 2023 21:50</p>
                <h3>
                  <h3>Dernier article</h3>
                </h3>
              </div>
            </div>
          </article>
        </article>
      </div>
    </div>
  )
}

export default BlogHome
