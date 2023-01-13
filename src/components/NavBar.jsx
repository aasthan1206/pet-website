import React from 'react'
import tfa_logo from '../assets/images/tfa_logo.png'
import { socialIcons } from '../utils/ContactData'
import Button from './shared/Button'
import { FaBars } from 'react-icons/fa'

const NavBar = ({classname}) => {
  return (
    <div className={`${classname} bg-background justify-between px-8 flex xl:justify-center xl:relative `}>
        <img src={tfa_logo} alt="" className='h-12 self-center sm:h-auto mt-2 xl:absolute xl:left-8 xl:top-1'/>
        <ul className='xl:flex gap-x-12 text-heading font-text font-bold px-8 self-center mt-8 ml-32 text-[17px] hidden'>
            <li className='hover:text-purple'><a href="https://togetherforanimals.org.uk/our-work/">Our Work</a></li>
            <li className='hover:text-purple'><a href="https://togetherforanimals.org.uk/your-donations/">Your Donations</a></li>
            <li className='hover:text-purple'><a href="https://togetherforanimals.org.uk/news/">News</a></li>
            <li className='hover:text-purple'><a href="https://togetherforanimals.org.uk/get-involved/">Get Involved</a></li>
        </ul>
        <div className='xl:flex gap-x-4 self-center mt-6 ml-4 2xl:absolute 2xl:right-48 hidden'>
            {socialIcons.map((data) => (
                <a href={data.link} key={data.id}><img src={data.img} alt="" /></a>
            ))}
        </div>
        <div className='flex'>
            <Button classname={`bg-green text-white mr-8 w-32 mt-4 xl:absolute xl:right-0 hover:bg-[#29856c]`} text={`Donate`}/>
            <FaBars className='block xl:hidden mt-8 h-8 w-8'/>
        </div>
    </div>
  )
} 

export default NavBar
