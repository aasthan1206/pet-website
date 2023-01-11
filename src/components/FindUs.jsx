import React from 'react'
import { address } from '../utils/ContactData'

const FindUs = () => {
  return (
    <div className='bg-background text-center pt-8 lg:text-left'>
        <div className='py-5 text-heading text-2xl font-heading'>Find Us</div>
        <div>
            {
                address.map((data) => (
                    <div className='text-text font-text py-1'>{data.desc}</div>
                ))
            }
        </div>
        <div className='py-5'><a href="https://www.google.com/maps/place/Shilton+Rd,+Burford,+UK/@51.7995334,-1.6320089,16z/data=!4m6!3m5!1s0x487133cdf54e8529:0x5b7887978ae5b3eb!8m2!3d51.7995334!4d-1.6320089!16s%2Fg%2F1tfvgnq2"  className='text-text font-text underline'>Get Directions</a></div>
    </div>
  )
}

export default FindUs
