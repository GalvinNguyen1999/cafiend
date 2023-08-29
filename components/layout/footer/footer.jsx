/* eslint-disable quotes */
'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Image from 'next/image'
import logo2 from '@/public/logo2.svg'

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <footer className="bg-cf-black pt-[60px] text-cf-milk lg:pt-[90px]">
      <div className="pb-[40px] grid grid-rows-auto grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-y-10 md:gap-x-10 lg:pb-[60px] lg:grid-cols-3 margin-section">
        <div data-aos="fade-right">
          <h3 className="text-[28px] font-oswald font-bold uppercase mb-5 md:text-[38px]">Contact Us</h3>
          <p>webflow,shop no.24 Fifth,USA</p>
          <a href="galvinnguyen1999@gmai.com" className="block mt-2 md:mt-4">galvinnguyen1999@gmail.com</a>
          <a href="tel:0935-948-947" className="block mt-2 md:mt-4">+0935-948-947</a>
        </div>

        <div data-aos="fade-up">
          <div className="flex justify-start lg:justify-center">
            <Image
              src={logo2}
              alt="Logo Cafiend"
              width={178}
              height={62}
              priority
            />
          </div>
          <p className="text-left mt-5 lg:text-center">
            Hot, Cold, Sweet or straight up, we&apos;ve got the brew for you.
          </p>
        </div>

        <div className="lg:text-right" data-aos="fade-left">
          <h3 className="text-[28px] font-oswald font-bold uppercase mb-5 md:text-[38px]">Open Hour</h3>
          <ul>
            <li className="pb-2 md:pb-4">Monday-Friday: 09:00-20:00</li>
            <li className="pb-2 md:pb-4">Saturday: 09:00-18:00</li>
            <li>Sunday: 09:00-18:00</li>
          </ul>
        </div>
      </div>

      <div className="py-[15px] border-y border-y-[#cac6c633] text-center" data-aos="fade-up">
        <p className="text-sm sm:text-lg">
          © Powered by {` `}
          <a href="https://github.com/GalvinNguyen1999/cafiend">Dinh Cuong</a> {` `}
          created by {` `}
          <a href="https://github.com/GalvinNguyen1999/cafiend">Dinh Cuong</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
