'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const listMenu = [
  {
    title: 'organic coffee',
    listItems: ['pure flavor', 'natural taste', 'Chemical-free beans', 'Sustainable farming']
  },
  {
    title: 'fresh roasted',
    listItems: ['full-bodied flavor', 'aromatic beans', 'high-quality roast', 'fresh aroma']
  },
  {
    title: 'original taste',
    listItems: ['classic flavor', 'authentic taste', 'original recipe', 'traditional blend']
  }
]

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <section className="py-[60px] bg-cf-black text-cf-milk md:py-[90px] lg:py-[120px]">
      <div className="px-4 grid grid-rows-auto grid-cols-1 gap-y-10 lg:grid-cols-menu lg:gap-x-10">
        <div className="relative" data-aos="fade-right">
          <div className="lg:sticky lg:top-[100px]">
            <h2 className="text-[32px] font-oswald font-bold uppercase my-0 sm:text-[48px] md:text-[54px] lg:text-[64px]">
              What makes our coffee best?
            </h2>
            <p>
              Coffee can be served hot or cold and can be prepared in a variety of ways, such as drip brewing, French press, espresso, and more. The flavor and strength of the coffee depend on the type of beans used, the roasting process, and the brewing method.
            </p>
          </div>
        </div>

        <div data-aos="fade-left">
          {listMenu.map((list, index) => (
            <div key={index} className="p-5 border border-[#ffffff33] rounded-md mt-8 first:mt-0 sm:p-[30px] md:py-[55px] md:px-[45px]">
              <h3 className="text-[28px] font-oswald font-bold uppercase sm:text-[32px] lg:text-[38px]">{list.title}</h3>
              <ul className="pl-5 list-disc">
                {list.listItems.map((listItem, index) => (
                  <li key={index} className="mt-2.5 capitalize">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
