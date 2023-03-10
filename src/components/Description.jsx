import React from 'react'

const Description = () => {
    const headingStyle = `text-heading font-heading`
    const linkStyle = `text-blue active:text-red-500 visited:text-purple`
  return (
    <div className='m-6 p-2 text-center w-fit md:mx-auto md:w-[750px] lg:w-[872px]' >
      <div data-aos="fade-up" data-aos-delay="100" >
        <div className={`text-4xl ${headingStyle}`}>
          Every cat, dog, donkey & horse helped is dependent upon donations from people like you who share our love of animals.
        </div>
        <div className='my-10 text-text font-text'>
          Supporting <a href="https://togetherforanimals.org.uk/our-work/" className={linkStyle}>Together for Animals</a> is an easy and effective way of helping a variety of animals in need, making a difference to their lives, now and in the future.
        </div>
      </div>
      
      <div className={`mt-12 text-3xl md:mt-20 ${headingStyle}`} data-aos="fade-up" data-aos-delay="100">
        Because of the kind support and <a href="https://togetherforanimals.org.uk/your-donations/" className={linkStyle}>donations</a> Together for Animals receives, we are able to help change the lives of cats, dogs, donkeys, and horses through:
      </div>
    </div>
  )
}

export default Description
