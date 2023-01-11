import React from 'react'
import WorldHorse from '../assets/images/WorldHorse.jpg'
import Spana from '../assets/images/Spana.jpg'
import Mayhew from '../assets/images/Mayhew.jpg'
import BlueCross from '../assets/images/BlueCross.png'

const Charaties = () => {
  return (
    <div className='text-center my-12 lg:mx-12 2xl:mx-64'>
      <div className='text-heading text-2xl font-heading lg:text-left mb-10'>Our Charaties</div>
      <div className='flex flex-wrap justify-center lg:justify-between '>
        <img src={BlueCross} alt=""/>
        <img src={Mayhew} alt="" className='h-fit self-center' />
        <img src={Spana} alt="" className='h-fit self-center' />
        <img src={WorldHorse} alt="" className='h-fit self-center' />
      </div>
    </div>
  )
}

export default Charaties
