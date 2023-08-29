'use client'

import { useState } from 'react'
// import { listProduct } from '@/constant'
import data from '@/utils/data'
import Image from 'next/image'
import { useContext } from 'react'
import { Store } from '@/utils/Store'

const Infomation = ({ params }) => {
  const [quantityProduct, setQuantityProduct] = useState(1)
  const { state, dispatch } = useContext(Store)
  const product = data.products.find((x) => x.slug === params.slug)
  const { slug } = params
  const [info, setInfo] = useState(product.info)

  const addToCartHandler = (item, qty) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === item.slug)
    const quantity = existItem ? existItem.quantity + 1 : Number(qty)
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
  }

  const handeleClickInfo = () => {
    setInfo(product.info)
  }

  const handeleClickDecs = () => {
    setInfo(product.description)
  }

  return (
    <section className="padding-section">
      <div className="margin-section">
        {data.products.map((item, index) => {
          if (item.slug === slug) {
            return (
              <div key={index} className="grid grid-cols-1 grid-rows-auto gap-y-8 lg:grid-cols-2 gap-x-10">
                {/* image */}
                <div>
                  {item?.subphoto?.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`product-${item.name}`}
                      width={940}
                      height={940}
                      priority
                      className="mb-[30px] last:mb-0"
                    />
                  ))}
                </div>

                {/* information */}
                <div>
                  <div className="sticky top-[100px]">
                    <h2 className="text-[32px] font-oswald font-bold uppercase mb-2.5 sm:text-[48px] md:text-[54px] lg:text-[64px]">{item.name}</h2>
                    <div className="flex items-center gap-2.5">
                      <span>$ {item.price} USD</span>
                      <span className="text-sm text-gray-500 line-through">$ 56.79 USD</span>
                    </div>
                    <p className="mb-2.5 md:mt-5">
                      Coffee is a popular beverage enjoyed by millions of people around the world.
                    </p>

                    <div className="mt-[30px] p-2.5 border border-cf-black rounded-md sm:flex sm:justify-between sm:items-center">
                      <div className="flex items-center justify-start gap-5 mb-5 sm:mb-0">
                        <div className="font-bold">Quantity</div>
                        <input
                          type='number'
                          value={quantityProduct}
                          onChange={(e) => setQuantityProduct(e.target.value)}
                          className='bg-transparent rounded-md border border-cf-black p-4'
                          min={1}
                          max={item.countInStock}
                        />
                      </div>

                      <button
                        onClick={() => addToCartHandler(item, quantityProduct)}
                        type="button"
                        className="uppercase border border-cf-black rounded-md py-3 px-5 bg-transparent text-cf-black text-lg hover:bg-cf-black hover:text-cf-milk active:opacity-50 transition-all duration-100 sm:px-[60px]"
                      >
                        add to card
                      </button>
                    </div>

                    <div className="mt-5 md:mt-10">
                      <div className="sm:flex sm:gap-5">
                        <button
                          onClick={handeleClickInfo}
                          className="w-full uppercase border border-cf-black rounded-md py-3 px-5 bg-transparent text-cf-black text-lg focus:bg-cf-black focus:text-cf-milk active:opacity-50 transition-all duration-100 sm:py-[9px] sm:px-[30px] sm:w-auto"
                          autoFocus
                        >
                          Info
                        </button>

                        <button
                          onClick={handeleClickDecs}
                          className="w-full uppercase border border-cf-black rounded-md py-3 px-5 bg-transparent text-cf-black text-lg focus:bg-cf-black focus:text-cf-milk active:opacity-50 transition-all duration-100 mt-2.5 sm:mt-0 sm:py-[9px] sm:px-[30px] sm:w-auto"
                        >
                          desctiption
                        </button>
                      </div>

                      <ul className="mt-[30px] pl-5 list-disc">
                        {info.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Infomation
