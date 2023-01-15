import React from 'react'
import { iconsData } from '../utils/IconsData'

const Icons = () => {
  return (
    <div className='text-center my-8 md:flex md:flex-wrap md:justify-center md:gap-x-32 md:mx-16 lg:gap-x-16 md:static'>
      {
        iconsData?.map((data) => (
            <div key={data.key} className={`md:grow 2xl:grow-0 2xl:w-[408px] ${data.property}`} data-aos="fade-up" data-aos-delay={data.delay}>
                <img src={data.img} alt="Icons" className='w-fit mx-auto py-4' />
                <div className='py-4 text-heading text-2xl font-heading font-extrabold'>
                    {data.heading}
                </div>
                <div className='pb-8 text-text font-text w-[250px] mx-auto'>
                    {data.text}
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Icons
