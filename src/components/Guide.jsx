"use client";

import Image from "next/image";

export default function Guide() {
  return (
    <section className="max-w-[1400px] mx-auto bg-white py-20 sm:py-24 md:py-28 px-4 sm:px-8 md:px-16 xl:px-20">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-10 px-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#212121]">
          Classes for Every Level and Intention
        </h2>
        <p className="text-[#363535] mt-3 text-base sm:text-lg md:text-xl font-semibold">
          Our programs, ranging from basic to advanced health workshops, are built to guide you every step of the way.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1 */}
        <div
          style={{ backgroundImage: "url('/bgCover.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          className="relative ring-1 ring-[#B2B5B3] px-6 sm:px-8 md:px-10 rounded-lg flex flex-col items-start justify-center gap-3 sm:gap-4 py-8 sm:py-10"
        >
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#BBD63C] mb-2 shadow-md shadow-gray-800 flex items-center justify-center">
            <Image src="/machine.png" alt="icon" width={50} height={50} className="w-7 sm:w-8 h-7 sm:h-8" />
          </div>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
            Balanced Food Diet Mastery
          </h3>
          <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-200">
            A low-carb diet focuses on reducing carbohydrate intake while increasing proteins and healthy fats. Mastering this approach can help with weight management, blood sugar regulation, and overall health.
          </p>
        </div>

        {/* Card 2 */}
        <div className="ring-1 ring-[#B2B5B3] px-6 sm:px-8 md:px-10 rounded-lg flex flex-col items-start justify-center gap-3 sm:gap-4 py-8 sm:py-10">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#464646] mb-2 shadow-md shadow-gray-400 flex items-center justify-center">
            <Image src="/diet-food.png" alt="icon" width={50} height={50} className="w-7 sm:w-8 h-7 sm:h-8" />
          </div>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-[#323232]">
            Mindful Eating Techniques
          </h3>
          <p className="font-semibold text-sm sm:text-base md:text-lg text-[#3C3C3C]">
            Mindful eating is about developing a healthy relationship with food by paying attention to the eating experience. It helps you understand hunger signals, avoid overeating, and enjoy your meals fully.
          </p>
        </div>

        {/* Card 3 */}
        <div className="ring-1 ring-[#B2B5B3] px-6 sm:px-8 md:px-10 rounded-lg flex flex-col items-start justify-center gap-3 sm:gap-4 py-8 sm:py-10">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#464646] mb-2 shadow-md shadow-gray-400 flex items-center justify-center">
            <Image src="/depression.png" alt="icon" width={50} height={50} className="w-7 sm:w-8 h-7 sm:h-8" />
          </div>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-[#323232]">
            Stress Reduction Strategies
          </h3>
          <p className="font-semibold text-sm sm:text-base md:text-lg text-[#3C3C3C]">
            Stress impacts both mental and physical health, disrupting sleep, digestion, and overall well-being. Effective stress reduction techniques can improve your health and enhance the success of your nutrition plan.
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{ backgroundImage: "url('/bgCover.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
          className="relative ring-1 ring-[#B2B5B3] px-6 sm:px-8 md:px-10 rounded-lg flex flex-col items-start justify-center gap-3 sm:gap-4 py-8 sm:py-10"
        >
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#BBD63C] mb-2 shadow-md shadow-gray-800 flex items-center justify-center">
            <Image src="/performance.png" alt="icon" width={50} height={50} className="w-7 sm:w-8 h-7 sm:h-8" />
          </div>
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white">
            Building Vishvodaya
          </h3>
          <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-200">
            Vishvodaya are the foundation of sustainable wellness. Developing routines that align with your health goals ensures long-term success without falling into the trap of yo-yo dieting or unsustainable practices.
          </p>
        </div>
      </div>
    </section>
  );
}
