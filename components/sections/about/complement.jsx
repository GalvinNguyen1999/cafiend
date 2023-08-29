'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import signature from '@/public/images/signature.webp'
import signature2 from '@/public/images/signature2.webp'
import Image from 'next/image'

const Complement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section>
      <div className="px-4 grid gap-y-4 lg:grid-cols-2 gap-x-10 grid-rows-auto">
        <h2 className="text-[32px] font-oswald font-bold uppercase sm:text-[48px] leading-tight md:text-[54px] lg:text-[64px] pt-[60px] md:pt-[90px] lg:py-[130px]" data-aos="fade-right">
          The Perfect Pairing: Coffee and Desserts Complement Each Other
        </h2>

        <div className="pb-[60px] lg:pl-[45px] lg:py-[130px] lg:border-l lg:border-l-cf-black md:pb-[90px]" data-aos="fade-left">
          <p className="mb-4">
            Coffee is a popular and beloved beverage that is made from roasted coffee beans, which come from the berries of the Coffee a plant. The drink is enjoyed by millions of people.
          </p>
          <p>
            Coffee is often enjoyed as a morning or afternoon pick-me-up, but it can also be savored as a relaxing and enjoyable beverage. In addition to its taste and aroma, coffee has been shown to have a variety of health benefits, including increased alertness and improved mental focus. It is also a source of antioxidants and other beneficial compounds.
          </p>
          <div className="flex justify-end items-center relative mt-2.5">
            <Image
              src={signature}
              alt='signature'
              priority
              className="w-[15%] absolute left-[73%] lg:w-[20%] lg:left-[65%]"
            />
            <Image
              src={signature2}
              alt='signature2'
              priority
              className="w-[15%] lg:w-[20%]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Complement
