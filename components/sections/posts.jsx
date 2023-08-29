'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import Image from 'next/image'

const listPosts = [
  {
    imgUrl: 'https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c2902b1b537f645d07c9_6443ba54668ffdf536cf1eb6_1-p-500%20(8).png',
    date: 'Apr 20, 2023',
    title: 'Coffee: Fuel for Productivity and focus'
  },
  {
    imgUrl: 'https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c046ea3c139d2e0e60b8_6443ba54668ffdf536cf1eb6_1-p-500%20(4).png',
    date: 'Apr 20, 2023',
    title: 'The Culture and History of Coffee.'
  },
  {
    imgUrl: 'https://uploads-ssl.webflow.com/643cd7a284ea6a516516b964/6443c035f2864aedbfe59c8d_6443ba54668ffdf536cf1eb6_1-p-500%20(3).png',
    date: 'Apr 20, 2023',
    title: 'Coffee: A Stimulant for Creativity.'
  }
]

const Posts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="py-[60px] bg-cf-black text-cf-milk md:py-[90px] lg:py-[120px]">
      <div className="margin-section" data-aos="fade-up">
        <div className="text-center mb-5 sm:mb-10">
          <h2 className="text-[32px] font-oswald font-bold uppercase sm:text-[48px] md:text-[54px] lg:text-[64px]">
            Our Recent Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-10 grid-rows-auto md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
          {listPosts.map((listPost, index) => (
            <div key={index}>
              <Link href='/blog' className="rounded-md overflow-hidden inline-block">
                <Image
                  src={listPost.imgUrl}
                  alt={listPost.title}
                  width={500}
                  height={482}
                  className="transition duration-1000 ease-in-out hover:scale-110 object-cover"
                  priority
                />
              </Link>
              <div className="pt-5">
                <div className="mb-[5px] font-normal">{listPost.date}</div>
                <Link href='/blog' className="text-[28px] font-oswald font-bold uppercase">{listPost.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Posts
