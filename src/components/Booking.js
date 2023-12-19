import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUser } from 'react-icons/fa'

const Booking = () => {
 const [formData, setFormData] = useState({
   name: '',
   lastName: '',
   email: '',
   country: '',
   numéroDeTéléphone: '',
 })

 const [successMessage, setSuccessMessage] = useState('')

 const handleChange = (e) => {
   const { name, value } = e.target
   setFormData({
     ...formData,
     [name]: value,
   })
 }

 const handleSubmit = async (e) => {
   e.preventDefault()

   try {
     const response = await axios.post(
       '/.netlify/functions/reservations',
       formData
     )
     console.log('Réservation envoyée:', response.data)

     setSuccessMessage('Réservation envoyée avec succès.')

     setFormData({
       name: '',
       lastName: '',
       email: '',
       country: '',
       phoneNumber: '',
     })

     setTimeout(() => {
       setSuccessMessage('')
       // Reload the page to make the navigation link work
       window.location.reload()
     }, 3000)
   } catch (error) {
     console.error("Erreur lors de l'envoi de la réservation:", error)
   }
 }
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  
  return (
    <div className='booking section-center'>
      <div className='title'>
        <h3>Commençons votre voyage</h3>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Your personal details</h3>

        <div className='form-input'>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='nom'
          />
          <span>
            <FaUser />
          </span>
        </div>

        <div className='form-input'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder='prenom'
          />
          <span>
            <FaUser />
          </span>
        </div>

        <div className='form-input'>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Email'
          />
          <span>
            <FaEnvelope />
          </span>
        </div>

        <div className='form-input'>
          <input
            type='text'
            id='number'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder='numero de telephone'
          />
          <span>
            <FaPhoneAlt />
          </span>
        </div>

        <div className='form-input'>
          <input
            type='text'
            id='country'
            name='country'
            value={formData.country}
            onChange={handleChange}
            placeholder='pays'
            required
          />
          <span>
            <FaGlobe />
          </span>
        </div>

        <button className='btn btn-form' type='submit'>
          envoyer votre message
        </button>
      </form>
      <div>
        {successMessage && (
          <div className='success-message'>{successMessage}</div>
        )}
      </div>
    </div>
  )
}

export default Booking
