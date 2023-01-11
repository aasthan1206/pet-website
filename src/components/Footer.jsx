import React from 'react'
import fundraising from '../assets/images/fundraising.png'

const Footer = () => {
  return (
    <div className='bg-[#42204f] text-white text-sm font-text px-8 pt-14'>
        <div className='sm:flex sm:gap-24 lg:justify-center'>
            <div className='flex justify-between pb-6 sm:justify-start sm:gap-24'>
                <img src={fundraising} alt="" className='h-fit self-center'/>
                <div className='self-center'>Who we are</div>
            </div>
            <div className='py-12'>
                <div className='pb-4'>Get Involved</div>
                <div className='pt-4'>Solicitors - Dormant Client Accounts</div>
            </div>
        </div>
        
        <div className='py-6 sm:text-center'>
            <div className='pb-4'>Payroll Giving</div>
            <div className='py-4'>Take on a fundraising challenge</div>
            <div className='py-4'>Corporate Partnerships Thank you</div>
        </div>
        <div className='text-center py-12'>Who We Help</div>
        <div className='text-center py-4'>
            <div>© Together For Animals All Rights Reserved | Registered Charity No: 1102985</div>
            <div className='py-4'>adaptable</div>
        </div>
    </div>
  )
}

export default Footer
