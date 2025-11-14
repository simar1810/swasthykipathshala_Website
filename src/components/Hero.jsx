import Image from 'next/image'

const Hero = () => {
  return (
    <main className="flex flex-col min-h-screen text-white bg-[#BBD63C] overflow-x-hidden">
      <div
        className="flex flex-col justify-between flex-grow bg-cover bg-center lg:pt-14"
        style={{ backgroundImage: "url('/bg-frame.png')" }}
      >
        <section className="relative max-w-[1100px] flex flex-col flex-grow px-5 sm:px-10 lg:px-20 xl:px-8 lg:flex-row items-center justify-center lg:items-end lg:justify-between mx-auto xl:w-full w-full">
          {/* Left content */}
          <div className="absolute max-w-2xl mx-auto z-10 lg:pb-18 text-center lg:text-left xl:pb-28 2xl:pb-20 px-3 sm:px-0">
            <div className="relative flex justify-center lg:justify-start items-center mb-10 lg:mb-28 xl:mb-24 mt-4 lg:mt-6">
              <Image
                src="/client-assets/HealthWithDhriti.jpeg"
                alt="Wellness Logo"
                width={250}
                height={250}
                className="w-48 sm:w-64 md:w-[30vw] lg:w-[10rem] lg:absolute lg:left-[-20px] lg:top-[-50px] xl:left-[-30px] xl:top-[-70px] xl:w-[14vw] 2xl:w-[12vw] 2xl:top-[-80px]"
              />
            </div>

            {/* <span className="lg:hidden xl:inline-block px-3 py-1 rounded-full bg-transparent text-sm sm:text-base md:text-2xl xl:text-lg mb-4 md:mb-8 lg:mb-6 inline-block ring-1 ring-white">
              -/ Wellness
            </span> */}

            <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-snug">
              Step Into Wellness, <br />
              <span className="text-3xl sm:text-4xl md:text-7xl lg:text-4xl xl:text-5xl">
                Flow Into Balance
              </span>
            </h1>

            <p className="mt-3 sm:mt-4 md:mt-6 lg:mt-4 w-full sm:w-[85%] md:w-[90%] mx-auto lg:w-[65%] xl:w-[60%] 2xl:w-[65%] lg:mx-0 text-sm md:text-2xl lg:text-lg text-gray-200">
              Transform your health with customized nutrition, intelligent tools,
              and trusted expert advice
            </p>

            <button className="mt-6 sm:mt-8 px-8 sm:px-10 md:px-12 lg:px-14 xl:px-10 2xl:px-14 py-2 sm:py-3 xl:py-2 2xl:py-3 bg-[#BBD63C] text-[#303030] text-sm sm:text-base md:text-xl xl:text-lg 2xl:text-xl font-semibold rounded-xl shadow hover:bg-lime-500 transition">
              Start Free Trial
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-end absolute lg:right-16 xl:right-0 2xl:right-[-90px] lg:bottom-[-95px] xl:bottom-[-115px]">
            <Image
              src="/yoga_lady.png"
              alt="Wellness Yoga"
              width={500}
              height={500}
              className="hidden lg:flex lg:w-lg lg:h-[90vh] xl:w-2xl xl:h-full 2xl:h-full"
            />
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="text-[#212121] py-5 px-5 sm:px-10 md:px-20 xl:px-8 max-w-[1100px] w-full mx-auto">
        <div className="flex items-center justify-between gap-6 sm:gap-0 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start xl:gap-2">
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">10,000</h3>
            <p className="text-[#303030] text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-2xl">Life Impacted</p>
          </div>
          <div className="flex flex-col items-center sm:items-start xl:gap-2">
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">5000+</h3>
            <p className="text-[#303030] text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-2xl">Personalized Plan</p>
          </div>
          <div className="flex flex-col items-center sm:items-start xl:gap-2">
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">99%</h3>
            <p className="text-[#303030] text-xs sm:text-sm md:text-lg xl:text-xl 2xl:text-2xl">User Satisfaction</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
