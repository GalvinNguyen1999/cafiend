'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="bg-cf-black pt-[60px] md:pt-[90px] lg:pt-[120px]" data-aos="fade-up">
      <div className="margin-section">
        <div className="mb-10 text-center md:px-[18px] lg:px-[180px]">
          <h2 className="text-[40px] font-oswald font-bold my-0 uppercase text-cf-milk sm:text-[54px] md:text-[70px] lg:text-[80px]">
            Caffeine Infused Delight
          </h2>
          <p className="text-cf-milk">
            Coffee can be enjoyed in a variety of forms, from a simple cup of black coffee to more elaborate drinks like lattes and cappuccinos. It is a popular social beverage and often enjoyed as a part of social gatherings, meetings, or alone as a moment of relaxation.
          </p>
        </div>
      </div>

      <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]">
        <video playsInline autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6448aa4eef4ef804468a4158_pexels-kelly-2853794-3840x2160-24fps-transcode.mp4" />
          <source src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6448aa4eef4ef804468a4158_pexels-kelly-2853794-3840x2160-24fps-transcode.webm" />
        </video>
      </div>
    </section>
  )
}

export default Info
