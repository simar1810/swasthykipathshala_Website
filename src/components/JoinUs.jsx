import React from 'react'
import Image from 'next/image'

const JoinUs = () => {
  return (
    <div className='bg-[#FAFFE5] w-full relative mb-20 py-10 lg:py-20'>
      {/* Background Images */}
      <Image
        src='/floral-logo.png'
        alt='floral-logo'
        width={100}
        height={100}
              className='absolute w-24 sm:w-36 lg:w-48 top-0 left-4 sm:left-12 2xl:left-28'
      />
      <Image
        src='/floral-logo-template.png'
        alt='floral-logo-template'
        width={100}
        height={100}
        className='absolute w-48 sm:w-64 lg:w-80 left-1/2 -translate-x-2/3 bottom-0'
      />

      {/* Main Content */}
      <div className='max-w-[1250px] mx-auto h-full flex flex-col md:flex-col 
      justify-center items-center gap-12 px-4 text-center
      sm:gap-16 sm:px-8
      lg:flex-row lg:justify-start lg:items-start lg:text-left lg:px-14 lg:gap-20
      xl:gap-48 2xl:px-6'>
        
        {/* Left Section */}
        <div className='flex flex-col items-center lg:items-start'>
          <h1 className='text-black font-bold text-2xl sm:text-3xl md:text-4xl'>Why Choose</h1>
          <h1 className='text-[#01904B] font-bold text-4xl sm:text-5xl lg:text-4xl mt-2'>Health with Dhriti </h1>
          <p className='text-[#404040] font-medium my-6 sm:my-10 text-base sm:text-lg md:text-xl w-full sm:w-3/4 lg:w-96'>
            Choose us for a step-by-step path to success, backed by professionals and a supportive network.
          </p>
          <button className='px-5 sm:px-6 py-2.5 sm:py-3 text-white font-bold bg-gradient-to-r from-[#BBD63C] via-[#01904B] to-[#01904B] rounded-full text-sm sm:text-base md:text-lg w-40 sm:w-48 md:w-56'>
            Join Us Today
          </button>
        </div>

        {/* Right Section */}
        <div className='flex flex-col items-center md:items-start justify-center gap-5 sm:gap-7 md:gap-8 w-full md:w-[70%] lg:w-full'>
          {[
            {
              icon: '/machine-white.png',
              title: 'Scientifically Designed Balanced Nutrition',
              desc: 'Crafted with diabetes research & nutrition science.',
            },
            {
              icon: '/whistle.png',
              title: 'Expert Coaching',
              desc: 'Work with certified dietitians & wellness professionals.',
            },
            {
              icon: '/diet-food.png',
              title: 'AI-Powered Meal Plans',
              desc: 'Smart recommendations based on your preferences.',
            },
            {
              icon: '/check.png',
              title: 'Easy-to-Use App',
              desc: 'Track your meals, set reminders & follow structured plans.',
            },
            {
              icon: '/wellness.png',
              title: 'Supportive Community',
              desc: 'Connect with others on a similar journey.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-5 w-full'
            >
              <div className='w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-md bg-[#01904B] flex items-center justify-center'>
                <Image src={item.icon} alt='icon' width={28} height={28} className='w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8' />
              </div>
              <div className='flex flex-col gap-0.5 md:text-left'>
                <p className='font-bold text-sm sm:text-base md:text-lg'>{item.title}</p>
                <p className='font-normal text-xs sm:text-sm md:text-base'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JoinUs
