'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

import about1 from '@/public/images/about1.webp'
import about2 from '@/public/images/about2.webp'
import about3 from '@/public/images/about3.webp'

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="py-[60px] bg-cf-black text-cf-milk md:py-[90px] lg:py-[120px]">
      <div className="px-4 grid grid-cols-1 grid-rows-auto gap-y-[30px] md:grid-cols-2 md:items-center md:gap-x-[30px] max-w-[940px] mx-auto">
        <div data-aos="fade-right">
          <Image
            src={about1}
            alt='about1'
            width={591}
            height={705}
            className="rounded-md"
            priority
          />

          <Image
            src={about2}
            alt='about2'
            width={591}
            height={705}
            className="rounded-md mt-[60px]"
            priority
          />
        </div>

        <div data-aos="fade-left">
          <h2 className="text-[32px] font-oswald font-bold uppercase leading-tight sm:text-[48px] md:text-[54px] lg:text-[64px]">
            the journey of coffee farm
          </h2>
          <p>
            Coffee is a brewed drink made from roasted coffee beans, which are the seeds of berries from the Coffee a plant.
          </p>

          <Image
            src={about3}
            alt='about3'
            width={591}
            height={705}
            className="rounded-md mt-[40px] md:mt-[60px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Service
