'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { listPosts } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'


const Listpost = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="padding-section">
      <div className="px-4">
        <h2 className="text-center mb-5 text-[32px] font-oswald font-bold uppercase sm:text-[48px] sm:mb-10 md:text-[54px]" data-aos="fade-up">
          Our Recent Posts
        </h2>

        <div className="grid grid-cols-1 grid-rows-auto gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3" data-aos="fade-up">
          {listPosts.map((post, index) => (
            <div key={index}>
              <Link href={`blog/${post.title.toLowerCase().split(' ').join('-').replace(/[:/.]/g, '')}`} className="rounded-md overflow-hidden inline-block">
                <Image
                  src={post.imgUrl}
                  alt={post.title}
                  width={550}
                  height={482}
                  className="transition duration-1000 ease-in-out hover:scale-110 object-cover"
                  priority
                />
              </Link>

              <div className="pt-5">
                <div className="mb-[5px]">{post.date}</div>
                <Link href={`blog/${post.title.toLowerCase().split(' ').join('-').replace(/[:/.]/g, '')}`} className="text-[28px] font-oswald font-bold uppercase">
                  {post.title}
                </Link>
                <p className="mt-2.5">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Listpost
