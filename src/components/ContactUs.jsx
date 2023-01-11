import React from 'react'
import { socialIcons } from '../utils/ContactData'

const ContactUs = () => {
  return (
    <div className='bg-background'>
        <div className='bg-background text-center lg:text-left lg:pt-8'>
            <div className='py-5 text-heading text-2xl font-heading'>Contact Us</div>
            <div className='text-text font-text pt-2 pb-6'>
                <div>0870 609 2810</div>
                <div>mail@togetherforanimals.org.uk</div>
            </div>
            <div className='flex justify-center gap-6 py-8 lg:justify-start'>
                {
                    socialIcons.map((data) => (
                        <a href={data.link} key={data.id}><img src={data.img} alt="" /></a>
                    ))
                }
            </div>
        </div>

      
    </div>
  )
}

export default ContactUs
