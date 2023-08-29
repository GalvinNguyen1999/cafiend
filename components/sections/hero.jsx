'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Image from 'next/image'
import hero1 from '@/public/images/hero1.webp'
import original from '@/public/images/original.webp'
import Button from '../button/button'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="w-full h-full bg-cf-black padding-section">
      <div className="text-cf-milk grid grid-rows-auto grid-cols-1 gap-10 lg:grid-cols-hero items-center justify-stretch margin-section">
        <div className="text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-[50px] leading-[60px] text-cf-milk my-0 font-oswald font-bold uppercase sm:text-[70px] sm:leading-[80px] md:text-[90px] md:leading-[100px] lg:text-[100px] lg:leading-[110px]">
            Revive Your Coffee Love
          </h1>
          <p className="text-cf-milk my-0">
            Coffee contains caffeine, a natural stimulant that can help increase alertness and reduce fatigue.It also contains antioxidants and other beneficial compounds.
          </p>
          <Button title='view more details' href='/about-us' className='border-transparent bg-cf-milk text-cf-black hover:bg-transparent hover:text-cf-milk hover:border-cf-milk' />
        </div>

        <div className="flex justify-center relative lg:animate-fadeLeft" data-aos="fade-left">
          <Image
            src={original}
            alt='original'
            style={{
              position: 'absolute',
              left: '0',
              bottom: '5%',
              width: '35%'
            }}
            priority
          />
          <Image
            src={hero1}
            alt='hero1'
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
