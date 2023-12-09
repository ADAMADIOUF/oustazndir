import React from 'react'
import  a from "../assets/b2.png"
const BlogHome = () => {
  return (
    <div className='blog-home'>
      <div className='container-blog section-center'>
        <article>
          <img src={a} alt='' className='blog-big-img' />
          <p>22 october 2023 18: 56mn</p>
          <h3>
            <h3>Latest Pos</h3>
          </h3>
          <button className='btn-header'>Read More</button>
        </article>

        <article className='blog-small-img'>
          <article>
            <div className='small-img-flex'>
              <img src={a} alt='' />
              <div>
                <p>22 october 2023 18: 56mn</p>

                <h3>Latest Pos</h3>
              </div>
            </div>
          </article>
          <article>
            <div className='small-img-flex'>
              <img src={a} alt='' />
              <div>
                <p>22 october 2023 18: 56mn</p>

                <h3>Latest Pos</h3>
              </div>
            </div>
          </article>
          <article>
            <div className='small-img-flex'>
              <img src={a} alt='' />
              <div>
                <p>22 october 2023 18: 56mn</p>

                <h3>Latest Pos</h3>
              </div>
            </div>
          </article>
          <article>
            <div className='small-img-flex'>
              <img src={a} alt='' />
              <div>
                <p>22 october 2023 18: 56mn</p>

                <h3>Latest Pos</h3>
              </div>
            </div>
          </article>
        </article>
      </div>
    </div>
  )
}

export default BlogHome
