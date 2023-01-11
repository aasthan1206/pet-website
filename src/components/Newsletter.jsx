import React from 'react'
import Button from './shared/Button'

const Newsletter = () => {
    const inputStyle = `text-text font-text px-4 py-3 my-4 outline-none rounded-lg w-full`
  return (
    <div className='bg-background text-center pt-8 px-4 lg:w-1/3 lg:ml-16 lg:text-left'>
        <div className='py-5 text-heading text-2xl font-heading'>Newsletter Signup</div>
        <form action="" className=''>
            <div className='lg:flex gap-x-4'>
                <input type="text" placeholder='First Name' className={`lg:w-36 2xl:w-1/2 ${inputStyle}`} /> <br />
                <input type="text" placeholder='Last Name' className={`lg:w-36 2xl:w-1/2  ${inputStyle}`} /> <br />
            </div>
            <input type="text" placeholder='Email Address' className={inputStyle} /> <br />
            <div className='flex'>
                <input type="checkbox" name="" id="" className='-mt-8 outline-none h-24 w-24 rounded-xl sm:h-8 sm:w-8 lg:h-24 lg:w-24 sm:mt-0 lg:-mt-8 2xl:h-8 2xl:w-8 2xl:mt-0'/>
                <label htmlFor="" className='text-left text-text text-sm font-text px-4'>Click here if you are happy to receive emails from Together for Animals containing details about our work and our latest news.</label>
            </div>
            
            <Button classname={`bg-purple text-white px-8 3 mt-6 mb-12`} text={'Subscribe'} />
        </form>
    </div>
  )
}

export default Newsletter
