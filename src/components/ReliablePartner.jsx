import React from 'react'
import Image from 'next/image'

const ReliablePartner = () => {
  return (
    <div className='w-full h-auto 2xl:h-[574px] bg-gradient-to-r from-[#01904B] to-[#BDD737] px-6 sm:px-10 md:px-20 lg:px-28 2xl:px-36 text-white flex flex-col 2xl:flex-row justify-center 2xl:justify-center items-center 2xl:items-start gap-10 2xl:gap-36 relative'>

      <div
        className="absolute inset-0 w-53 h-23 top-18 hidden 2xl:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 3px, transparent 5px)",
          backgroundSize: "18px 18px",
        }}
      ></div>

      <Image src='/leaf.png' alt='leaf1' width={100} height={100} className='absolute bottom-0 left-0 w-20 sm:w-24 lg:w-28 hidden 2xl:block' />
      <Image src='/Ellipse.png' alt='ellipse' width={500} height={500} className='absolute bottom-0 left-24 w-[31vw] hidden 2xl:block' />
      <Image src='/Ellipse1.png' alt='ellipse1' width={500} height={500} className='absolute bottom-0 left-24 rotate-6 w-[36vw] hidden 2xl:block' />
      <Image src='/Ellipse2.png' alt='ellipse2' width={500} height={500} className='absolute bottom-0 left-6 w-[39vw] hidden 2xl:block' />

      <Image src='/floral-logo-template2.png' alt='floral' width={500} height={500} className='absolute bottom-0 right-0 w-40 sm:w-44 md:w-48 lg:w-52' />
      <Image src='/floral-logo-template3.png' alt='floral' width={500} height={500} className='absolute top-0 left-10 sm:left-32 md:left-52 lg:left-64 w-56 sm:w-72 md:w-80 lg:w-96' />
      
      <div className="absolute bottom-48 left-22 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-white rounded-full shadow-md shadow-gray-700 hidden 2xl:block"></div>
      <div className="absolute bottom-60 left-[40vw] w-3 sm:w-4 h-3 sm:h-4 bg-[#ffffffce] rounded-full shadow-md shadow-gray-600 hidden 2xl:block"></div>

      {/* Left side (image) — hidden below xl */}
      <div className='w-full overflow-hidden z-10 hidden 2xl:flex 2xl:justify-center 2xl:items-end'>
        <Image src='/Fitness-expert.png' alt='fitness-expert' width={500} height={500} className='w-sm h-fit overflow-hidden' />
      </div>

      {/* Right content */}
      <div className='flex flex-col items-center 2xl:items-start justify-center gap-6 sm:gap-8 py-10 2xl:py-14 text-center 2xl:text-left'>
        <div className='flex flex-col gap-3 sm:gap-4 px-4 sm:px-0'>
          <p className='font-bold text-[#1D1D1D] text-2xl sm:text-3xl md:text-4xl'>Your Reliable Partner in Wellness</p>  
          <p className='font-semibold text-sm sm:text-base md:text-lg text-[#333333] max-w-[90%] mx-auto 2xl:mx-0 sm:max-w-[80%] 2xl:max-w-none'>
            Health with Dhriti  combines the power of science-backed nutrition with personalized guidance to help you reclaim your health and live healthy life.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row justify-center lg:justify-between 2xl:justify-start gap-5 sm:gap-4 items-center sm:items-start  px-4 sm:px-0'>
          <div className='rounded-lg w-full sm:w-56'>
            <Image src="/image2.png" alt="check" width={100} height={100} className="w-full h-1/2" />
            <div className='flex flex-col gap-1 py-5 sm:py-7 px-4 sm:px-5 bg-white text-black rounded-b-xl lg:text-left'>
              <p className='font-bold text-xs sm:text-sm'>Nutritional Education</p>
              <p className='text-xs sm:text-sm font-normal'>Prevention is better than cure.</p>
            </div>                      
          </div>

          <div className='rounded-lg w-full sm:w-56'>
            <Image src="/image1.png" alt="check" width={100} height={100} className="w-full h-1/2" />
            <div className='flex flex-col gap-1 py-5 sm:py-7 px-4 sm:px-5 bg-white text-black rounded-b-xl lg:text-left'>
              <p className='font-bold text-xs sm:text-sm'>Preventative Care</p>
              <p className='text-xs sm:text-sm font-normal'>Learn to make better dietary choices.</p>
            </div>                      
          </div>

          <div className='rounded-lg w-full sm:w-56'>
            <Image src="/image3.png" alt="check" width={100} height={100} className="w-full h-1/2" />
            <div className='flex flex-col gap-1 py-5 sm:py-7 px-4 sm:px-5 bg-white text-black rounded-b-xl lg:text-left'>
              <p className='font-bold text-xs sm:text-sm '>Mind-Body Balance</p>
              <p className='text-xs sm:text-sm font-normal'>Focus on stress and emotional wellness.</p>
            </div>                      
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReliablePartner
