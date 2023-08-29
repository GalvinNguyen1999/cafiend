'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const timelineData = [
  {
    year: '2000',
    title: 'Coffee is introduced to the Arabian Peninsula, where it becomes popular as a stimulating drink. The world\'s first coffee shops are opened in the UK.',
    position: 'right'
  },
  {
    year: '2010',
    title: 'Coffee becomes an important commodity in international trade, particularly in the Middle East and Europe. The first machine is invented in Italy.',
    position: 'left'
  },
  {
    year: '2016',
    title: 'Coffee consumption continues to grow around the world, and innovations in transportation and technology make it easier to produce and distribute coffee on a large scale.',
    position: 'right'
  },
  {
    year: '2020',
    title: 'Coffee continues to be one of the most popular beverages in the world, with millions of people enjoying it every day. New brewing techniques and flavors continue to emerge.',
    position: 'left'
  }
]

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="padding-section">
      <div className="px-4 max-w-[990px] mx-auto">
        <div className="mb-5 text-center sm:mb-10" data-aos="fade-up">
          <h2 className="text-[32px] font-oswald font-bold uppercase sm:text-[48px] md:text-[54px] lg:text-[64px]">Our Timeline</h2>
        </div>

        <div>
          {timelineData.map((item, index) => (
            <div key={index} className="h-auto md:h-[200px]">
              <div className="relative md:float-left md:w-1/2 w-full h-auto md:h-full border-l-cf-black border-l md:border-none">
                {item.position === 'left' && (
                  <div data-aos="fade-right">
                    <div className="pl-[30px] md:pl-0 md:pr-[30px] lg:pr-[60px] text-left md:text-right">
                      <h3 className="text-[38px] font-bold font-oswald uppercase leading-tight mb-2.5">{item.year}</h3>
                      <p>{item.title}</p>
                    </div>
                  </div>
                )}
                <div className="w-2.5 h-2.5 bg-cf-black rounded-full top-[17px] -left-[6px] absolute md:hidden"></div>
              </div>
              <div className="relative md:float-left md:w-1/2 w-full h-auto lg:h-full border-l-cf-black border-l">
                {item.position === 'right' && (
                  <div data-aos="fade-left">
                    <div className="pl-[30px] lg:pl-[60px]">
                      <h3 className="text-[38px] font-bold font-oswald uppercase leading-tight mb-2.5">{item.year}</h3>
                      <p>{item.title}</p>
                    </div>
                  </div>
                )}
                <div className="hidden md:w-2.5 md:h-2.5 md:bg-cf-black md:rounded-full md:top-[17px] md:-left-[6px] md:absolute"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
