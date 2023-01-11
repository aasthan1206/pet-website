import React from 'react'

const Button = ({classname, text}) => {
  return (
    <div>
      <button className={`px-[18px] py-[18px] font-extrabold rounded-[10px] transition-colors ease-in-out duration-300 overflow-visible ${classname}`}>{text}Button</button>
    </div>
  )
}

export default Button
