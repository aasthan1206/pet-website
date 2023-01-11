import React from 'react'
import { heroCardsData } from '../utils/HeroCardsData'
import Button from './shared/Button'

const HeroCards = () => {
  return (
    <div className='m-8 sm:mx-12 md:mx-16 md:flex md:flex-wrap md:gap-8 md:justify-center lg:mt-24'>
        {
            heroCardsData.map((data) => (
                <div className={`${data.property} 2xl:grow-0 2xl:basis-96`}>
                    <img src={data.img} alt="" className='hidden md:block md:rounded-t-lg md:h-fit' />
                    <div key={data.id} className={`mb-8 p-8 rounded-lg text-center text-white md:rounded-b-lg md:rounded-t-none ${data.bg}`}>
                    <div className='text-[24px] font-heading'>{data.heading}</div>
                    <div className='py-3 text-[16px] font-text md:h-48'>{data.body}</div>
                    <Button classname={`text-white bg-[rgba(0,0,0,.2)] w-40 mt-4`} text={data.button}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default HeroCards
