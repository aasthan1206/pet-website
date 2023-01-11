import React from 'react'
import Button from './shared/Button'
import TFAhero from '../assets/images/TFAhero.png'

const Hero = () => {
  return (
    <div className='lg:flex lg:bg-background overflow-x-hidden lg:py-16'>
        <div className='lg:pl-16 lg:bg-background'>
            <div className='bg-background'>
                <div className='p-8 text-heading text-[2.75rem] text-center font-heading font-bold leading-[48px] lg:text-left lg:pr-0 lg:w-[400px]'>No animal should suffer from injury, disease, abuse or neglect.</div>
                <div className='px-5 text-secondary text-center font-text font-medium leading-[26px] lg:text-left lg:px-8 xl:w-3/4'>
                With your help, we can end the suffering of cats, dogs, donkeys and horses. Together for Animals is an animal welfare charity that raises much needed funds for its member charities. Animals contribute so much to our mental and physical wellbeing - by working together we are ensuring that they can enjoy happier, healthier lives. Every donation helps four charities save the lives of thousands of pets and working animals. Help us save animals from disease, neglect and abuse.
                </div>
            </div>
            <img src="https://www.cmzoo.org/wp-content/themes/cmzoo/assets/images/site/swash-large.svg" alt="" className='-mt-5 sm:absolute lg:hidden' />
            <div className='text-center sm:relative sm:mt-10 lg:static lg:text-left'>
            <Button classname={`mx-5 px-12 lg:w-96 bg-purple text-white lg:text-left`} text={`Stop an animal going hungry or homeless this winter`} />
            </div>
        </div>
        <img src={TFAhero} alt="" className='my-16 lg:my-0 lg:h-[25rem]'/>
    </div>
    
  )
}

export default Hero
