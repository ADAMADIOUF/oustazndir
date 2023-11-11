import React from 'react'
import a from  "../assets/b1.png"
import b from '../assets/b2.png'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import { Link } from 'react-router-dom'



const BlogHome = () => {
  const { data: products, isLoading: loading, error } = useGetProductsQuery()
  console.log(products);
  if(loading){
    return<loading/>
  }
  if (error) {
    return <error />
  }
  return (
    <div className='blog-home'>
      <h2>Latest from our Blog</h2>
      <div className='blog-container'>
        {products.map((blog) => {
          const { name, desc, id } = blog
          return (
            <article key={id}>
              <h1>{name}</h1>
              <p>{desc}</p>
              <span className='btn'>
                <Link to={`/blog/${id}`}>savoir plus</Link>
              </span>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default BlogHome
