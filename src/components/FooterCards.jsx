import React from 'react'
import Button from './shared/Button'
import { footerCardsData } from '../utils/FooterCardsData'

const FooterCards = () => {
  return (
    <div className='mx-14 md:flex md:flex-wrap md:gap-x-8 md:justify-center'>
      {
        footerCardsData.map((data) => (
            <div className='my-8 md:my-4 md:grow md:basis-1/3 lg:basis-0' data-aos="fade-up" data-aos-delay={data.delay}>
                <img src={data.img} alt="" className='hidden md:block md:rounded-t-lg md:h-fit'/>
                <div key={data.id} className='px-8 py-5 bg-background text-center rounded-lg md:rounded-b-lg md:rounded-t-none'>
                    <div className='pb-4 text-heading text-xl font-heading'>{data.heading}</div>
                    <div className='pb-4 text-text font-text'>{data.text}</div>
                    <Button classname={`mt-4 bg-purple text-white lg:bg-[rgba(0,0,0,.2)] text-left hover:bg-purple`} text={data.button} />
                </div>
            </div>
            
        ))
      }
    </div>
  )
}

export default FooterCards
