'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import contact1 from '@/public/images/contact1webp.webp'
import Image from 'next/image'
import Link from 'next/link'

const listWorking = [
  {
    rank: 'Monday',
    hour: '8am - 10pm'
  },
  {
    rank: 'Tuesday',
    hour: '8am - 10pm'
  },
  {
    rank: 'Wednesday',
    hour: '8am - 10pm'
  },
  {
    rank: 'Thursday',
    hour: '8am - 10pm'
  },
  {
    rank: 'Friday',
    hour: '8am - 10pm'
  },
  {
    rank: 'Saturday',
    hour: '8am - 3pm'
  },
  {
    rank: 'Sunday',
    hour: 'Closed'
  }
]

const Googlemap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="py-[60px] bg-cf-black md:py-[90px] lg:py-[120px]">
      <div className="lg:flex margin-section">
        <div className="bg-cf-milk rounded-md text-cf-black p-2.5 md:flex lg:mr-[15px] flex-1" data-aos="fade-right">
          <div className="flex flex-col justify-center items-center py-10 px-5 text-center border border-[#0101011a] rounded-md md:flex-1">
            <Image
              src={contact1}
              alt='contact'
              width={64}
              height={64}
              priority
            />
            <h3 className="text-[24px] font-oswald font-bold uppercase mb-2.5 sm:text-[28px]">Find Easily</h3>
            <p className="mb-2.5">The Queen&apos;s Walk, Bishop&apos;s, London SE1 7PB, United Kingdom</p>
            <Link href='https://github.dev/GalvinNguyen1999/cafiend'>galvinnguyen1999@gmail.com</Link>
            <a href="tel:+0935948947" className="mt-2.5">0935-948-947</a>
          </div>

          <div className="mt-2.5 md:flex-1 md:ml-2.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.804934796049!2d72.91798601546688!3d20.920166196851277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f76d7a7bd155%3A0xe715e4218027ad!2sShree%20Swaminarayan%20International%20School!5e0!3m2!1sen!2sin!4v1674024175689!5m2!1sen!2sin"
              width="100%" height="420"
              style={{ border: '0' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div className="bg-cf-milk rounded-md text-cf-black p-5 mt-[30px] sm:p-10 md:p-[60px] lg:mt-0 lg:ml-[15px]" data-aos="fade-left">
          <h3 className="text-[24px] font-bold font-oswald uppercase mb-2.5 sm:text-[28px] md:text-[38px]">Opening Hours</h3>

          <div className="pt-2.5">
            {listWorking.map((item, index) => (
              <div key={index} className="flex justify-start items-start py-[5px]">
                <div>{item.rank}</div>
                <div className="h-5 flex-1 border-b border-dotted border-b-cf-black"></div>
                <div>{item.hour}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Googlemap
