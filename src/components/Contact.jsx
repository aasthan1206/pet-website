import React from 'react'
import ContactUs from './ContactUs'
import FindUs from './FindUs'
import Newsletter from './Newsletter'

const Contact = () => {
  return (
    <div className='lg:flex bg-background lg:px-10 justify-evenly 2xl:justify-evenly 2xl:gap-20' >
            <ContactUs />
            <FindUs />
            <Newsletter />
    </div>
  )
}

export default Contact
