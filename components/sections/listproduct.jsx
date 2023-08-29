'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '../button/button'
import Product from '../product/product'
import data from '@/utils/data'

const Listproduct = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="w-full h-full padding-section" data-aos="fade-up">
      <div className="margin-section">
        <div className="text-center mb-10">
          <h2 className="text-[32px] my-0 uppercase font-oswald font-bold sm:text-5xl md:text-[54px] lg:text-[64px]">OUR BLENDS DELIVER</h2>
          <p className="mb-0 text-lg mt-1">Hot, Cold, Sweet or straight up, we&apos;ve got the brew for you.</p>
          <Button title="all product" href='/shop' className='border-cf-black text-cf-black bg-transparent hover:text-cf-milk hover:bg-cf-black hover:border-cf-black' />
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-x-5 md:gap-y-10 md:grid-rows-auto md:grid-cols-2 justify-stretch lg:gap-y-10 lg:gap-x-10 lg:grid-cols-3" data-aos="fade-up">
          {data.products.map((data, index) => <Product key={index} data={data} />)}
        </div>
      </div>
    </section>
  )
}

export default Listproduct
