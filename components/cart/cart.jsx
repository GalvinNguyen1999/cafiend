'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { Store } from '@/utils/Store'

const Cart = () => {
  let [isOpen, setIsOpen] = useState(false)
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const { state, dispatch } = useContext(Store)
  const { cart: { cartItems } } = state

  useEffect(() => {
    setCartItemsCount(cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [cartItems])

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty)
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
  }

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="relative flex justify-center items-center">
        <button type="button" onClick={openModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </button>

        <div className="absolute -top-2 -right-2 h-4 w-4 bg-transparent rounded-full text-cf-milk flex items-center justify-center text-xs font-bold">
          <span className="ml-1 rounded-full bg-cf-black px-2 py-1 text-xs font-bold text-white">
            {cartItemsCount}
          </span>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex justify-end items-stretch min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-in duration-300"
                enterFrom="opacity-0 translate-x-4"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in-out"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-4"
              >
                <Dialog.Panel className="w-full max-w-[480px] min-w-[320px] transform overflow-hidden bg-cf-milk text-left align-middle shadow-xl transition-all flex flex-col">
                  {/* header */}
                  <div className="flex justify-between px-6 py-4 border border-[#e6e6e6]">
                    <h3 className="text-3xl font-bold font-oswald uppercase">
                      Your cart
                    </h3>
                    <button type="button" onClick={closeModal} className="p-2">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                    </button>
                  </div>

                  {/* list product */}
                  <div className="flex-1">
                    {cartItems.length === 0 ? (
                      <div>
                        Cart is empty. <Link onClick={closeModal} href="/shop" className="underline">Go shopping</Link>
                      </div>
                    ) : (
                      <div className="flex flex-col divide-y py-3 px-6 flex-1">
                        {cartItems.map((item, index) => (
                          <div key={index} className="flex items-start py-3">
                            {/* image */}
                            <div>
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={60}
                                height={60}
                                priority
                              />
                            </div>

                            {/* info */}
                            <div className="flex-1 mx-4 flex flex-col">
                              <div className="font-bold text-lg capitalize">{item.name}</div>
                              <div>$ {item.price} USD</div>
                              <div className='hover:cursor-pointer' onClick={() => removeItemHandler(item)}>Remove</div>
                            </div>

                            {/* quality */}
                            <div>
                              <select
                                value={item.quantity}
                                onChange={(e) => updateCartHandler(item, e.target.value)}
                                className='bg-transparent rounded-md border border-cf-black p-4'
                              >
                                {[...Array(item.countInStock).keys()].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* footer */}
                  <div className="flex flex-col p-6 pt-4 border-t border-gray-400">
                    <div className="flex justify-between mb-4">
                      <div>Subtotal({cartItems.reduce((a, c) => a + c.quantity, 0)})</div>
                      <div className="font-bold">
                        {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                      </div>
                    </div>
                    <Link href="/shop" onClick={closeModal} className="text-lg font-normal py-3 px-8 bg-cf-black text-cf-milk text-center uppercase tracking-normal rounded-md hover:opacity-70">
                      CONTINUE TO CHECKOUT
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Cart
