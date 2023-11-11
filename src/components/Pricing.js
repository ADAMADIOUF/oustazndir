import React from 'react'


const Pricing = () => {
  return (
    <div className='pricing-container'>
      <div className='pricing-tier'>
        <h3>Best Experience</h3>
        <h2>Elite</h2>
        <p className='price'>$16 /hour</p>
        <button>GET STARTED</button>
        {/* Add the rest of the details for the Elite plan */}
      </div>

      <div className='pricing-tier'>
        <h3>Best Value</h3>
        <h2>Pro</h2>
        <p className='price'>$11.00 /hour</p>
        <button>GET STARTED</button>
        {/* Add the rest of the details for the Pro plan */}
      </div>

      <div className='pricing-tier'>
        <h3>Essentials</h3>
        <h2>$9.00 /hour</h2>
        <p className='price'></p>
        <button>GET STARTED</button>
        {/* Add the rest of the details for the Essentials plan */}
      </div>

      <div className='pricing-tier'>
        <h3>Simple</h3>
        <h2>$8 /hour</h2>
        <p className='price'></p>
        <button>GET STARTED</button>
        {/* Add the rest of the details for the Simple plan */}
      </div>

      <div className='pricing-notes'>
        <p>
          *Cancellations or changes to the schedule must be submitted through
          the student dashboard at least 4 hours prior to the lesson start time.
        </p>
        <p>
          **Rescheduling must be done within 90 days of the original lesson.
        </p>
        <p>
          ***Discounts are applicable when 2 or more students enroll in the same
          plan. Discounts are not applied for group lessons.
        </p>
      </div>
    </div>
  )
}

export default Pricing
