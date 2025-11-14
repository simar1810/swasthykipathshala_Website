"use client";

export default function Works() {
  const steps = [
    {
      id: "01",
      title: "Sign Up & Get Personalized Assessment",
      desc: "Tell us about your health goals, dietary preferences, and medical history.",
    },
    {
      id: "02",
      title: "Get Instant Access to Health with Dhriti ",
      desc: "Once you sign up, you'll receive a direct login link to our app—no extra steps needed!",
    },
    {
      id: "03",
      title: "Follow Your Personalized Plan & Track Progress",
      desc: "Get science-backed meal plans, expert consultations, and real-time tracking.",
    },
    {
      id: "04",
      title: "Achieve a Healthier You!",
      desc: "Stay consistent with reminders, recipe recommendations, and expert advice.",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-4 lg:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#212121]">
          How its Works
        </h2>
        <p className="text-[#363535] mt-2 text-lg md:text-xl font-semibold">
          Your concerns are our priority - we craft the perfect plan to fit your needs
        </p>
      </div>

      <div className="relative mx-w-[1100px] mx-auto">
        <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 w-1 my-16 h-[65vh] bg-[#C5C5C5] rounded-2xl px-[3px]"></div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 flex-col items-center">
                <div className="w-8 h-8 bg-[#01904B] border-4 border-white rounded-full"></div>
                <span
                  className={`absolute top-1/2 -translate-y-1/2 text-7xl font-bold text-gray-800 ${
                    index % 2 === 0 ? "left-32" : "right-32"
                  }`}
                  style={{
                    WebkitTextStroke: "2px #9E9A9A",
                    color: "transparent",
                  }}
                >
                  {step.id}
                </span>
              </div>

              {/* Step card */}
              <div className="relative w-full lg:w-lg lg:mb-8 xl:mb-0">
                {/* Dark background shadow shape - hidden on small screens */}
                <div
                  className={`absolute bottom-[-8px] md:bottom-[-15px] ${
                    index % 2 === 0 ? "left-0 md:left-[-15px]" : "right-0 md:right-[-15px]"
                  } px-40 w-full lg:w-auto lg:px-60 rounded-3xl py-14 lg:py-16 bg-[#424242]`}
                ></div>

                <div
                  className={`relative bg-white shadow-lg rounded-2xl p-6 border text-center lg:text-left
                    ${index % 2 === 0 ? "lg:pl-5" : "lg:pl-10"} 
                    mt-6 md:mt-12 lg:mt-0`}
                >
                  <h3 className="text-sm sm:text-xl md:text-2xl lg:text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-semibold text-sm sm:text-lg mt-2 lg:w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
