'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonial = () => {
  const [name, setName] = useState('Ann Den Smith')
  const [position, setPosition] = useState('manager')

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const handleClickNext = () => {
    setName('Renie John')
    setPosition('owner')
  }

  const handleClickBack = () => {
    setName('Ann Den Smith')
    setPosition('manager')
  }

  return (
    <section className="padding-section">
      <div className="margin-section" data-aos="fade-up">
        <div className="mb-5 text-center sm:mb-10">
          <h2 className="text-[32px] font-oswald font-bold uppercase sm:text-[48px] md:text-[54px] lg:text-[64px]">
            Our Testimonial
          </h2>
        </div>

        <div>
          <div className="flex justify-center mb-5">
            <svg className="w-[54px] h-[54px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>

          <div className="flex items-center gap-5 xl:gap-12">
            <button onClick={handleClickNext} type="button" className="hidden lg:p-4 lg:border lg:border-cf-black lg:rounded-md lg:inline-block">
              <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
              </svg>
            </button>
            <p className="mb-[30px] md:text-xl lg:text-[22px] text-center xl:px-10">
              &quot;I&apos;m a very stubborn person. I think it has helped me over my career.
              I&apos;m sure it has hindered me at times as well, but not too many times.
              I know that if I set my mind to do something, I will achieve it.&quot;
            </p>
            <button onClick={handleClickBack} type="button" className="hidden lg:p-4 lg:border lg:border-cf-black lg:rounded-md lg:inline-block">
              <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
              </svg>
            </button>
          </div>

          <div className="text-center">
            <h3 className="text-[28px] font-oswald font-bold uppercase my-1.5 sm:mt-2.5 sm:mb-0 md:text-[32px] md:mt-0 xl:text-[38px]">{name}</h3>
            <p className="text-xl uppercase">{position}</p>
          </div>

          <div className="flex gap-2.5 justify-center pt-1 lg:hidden">
            <button onClick={handleClickNext} type="button" className="w-[18px] h-[18px] bg-cf-black rounded-full"></button>
            <button onClick={handleClickBack} type="button" className="w-[18px] h-[18px] bg-[#22222266] rounded-full"></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
