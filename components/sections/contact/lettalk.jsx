'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Lettalk = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="padding-section">
      <div className="px-4 max-w-[990px] mx-auto xl:px-0" data-aos="fade-up">
        <h2 className="text-[32px] font-oswald font-bold uppercase mb-5 text-center sm:mb-10 sm:text-[48px] md:text-[54px] lg:text-[64px]">
          Let’s talk :)
        </h2>

        <form method='GET' className="sm:grid sm:grid-cols-2 sm:gap-y-5 sm:gap-x-5 sm:grid-rows-autos sm:mb-2.5 md:gap-x-10 md:gap-y-3">
          <div className="min-w-[50px] h-auto mb-2.5 border border-transparent text-[#434343]">
            <input
              type="text"
              placeholder="Full Name"
              maxLength="256"
              className="w-full h-14 text-cf-black bg-transparent border border-cf-black rounded-md py-5 pl-4 text-base focus:border-cf-black placeholder:text-cf-black"
            />
          </div>

          <div className="min-w-[50px] h-auto mb-2.5 border border-transparent text-[#434343]">
            <input
              type="email"
              placeholder="Your Email"
              maxLength="256"
              className="w-full h-14 text-cf-black bg-transparent border border-cf-black rounded-md py-5 pl-4 text-base focus:border-cf-black placeholder:text-cf-black"
            />
          </div>

          <div className="min-w-[50px] h-auto mb-2.5 border border-transparent text-[#434343]">
            <input
              type="number"
              placeholder="Phone Number"
              maxLength="256"
              className="w-full h-14 text-cf-black bg-transparent border border-cf-black rounded-md py-5 pl-4 text-base focus:border-cf-black placeholder:text-cf-black"
            />
          </div>

          <div className="min-w-[50px] h-auto mb-2.5 border border-transparent text-[#434343]">
            <select className="w-full h-14 text-cf-black bg-transparent border border-cf-black rounded-md p-2 text-sm focus:border-cf-black">
              <option className="text-cf-black" value="">Select City</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="w-full h-auto mb-2.5 border border-transparent text-[#434343] sm:row-span-1 sm:col-span-2">
            <textarea
              placeholder="Enter message here"
              maxLength="5000"
              className="min-h-[120px] h-auto py-4 pl-4 text-cf-black bg-transparent border border-cf-black rounded-md text-base w-full placeholder:text-cf-black sm:row-span-1 sm:col-span-2">
            </textarea>
          </div>

          <input
            type="submit"
            value="get in touch"
            className="mt-5 px-5 text-base relative text-cf-milk text-center uppercase bg-cf-black border border-cf-black rounded-md py-3 font-normal hover:text-cf-black hover:bg-cf-milk transition-all duration-100 cursor-pointer sm:row-span-1 sm:col-span-2 sm:justify-self-center sm:px-8"
          />
        </form>
      </div>
    </section>
  )
}

export default Lettalk
