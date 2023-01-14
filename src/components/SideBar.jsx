import React from 'react'
import { socialIcons } from "../utils/ContactData";

const SideBar = ({style}) => {
  return (
    <div style={style} className='bg-background text-center' >
        <ul className=' text-heading text-3xl font-text font-extrabold py-16'>
            <li className="py-6">
            <a href="https://togetherforanimals.org.uk/our-work/">Our Work</a>
            </li>
            <li className="py-6">
            <a href="https://togetherforanimals.org.uk/your-donations/">
                Your Donations
            </a>
            </li>
            <li className="py-6">
            <a href="https://togetherforanimals.org.uk/news/">News</a>
            </li>
            <li className="py-6">
            <a href="https://togetherforanimals.org.uk/get-involved/">
                Get Involved
            </a>
            </li>
            <li className='flex justify-center gap-12 py-12'>
                {
                    socialIcons.map((data) => (
                        <a href={data.link} key={data.id}><img src={data.img} alt="" /></a>
                    ))
                }
            </li>
        </ul>
      </div>
  )
}

export default SideBar
