'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [valueInput, setValueInput] = useState('')

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="relative justify-center items-center hidden lg:flex mr-2">
        <button type="button" onClick={openModal}>
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed top-0 left-0 right-0 bottom-auto overflow-y-auto">
            <div className="flex justify-end items-stretch min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0 -translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
              >
                <Dialog.Panel className="w-full transform overflow-hidden bg-cf-milk text-left align-middle shadow-xl transition-all py-[60px]">
                  <div className="flex items-center px-4">
                    <button type="button">
                      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </button>
                    <div className="flex-1 px-5">
                      <input
                        type='text'
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        placeholder="Search..."
                        className="block w-full h-14 bg-transparent align-middle text-base py-5 pl-4 text-cf-black rounded-md border border-cf-black outline-none"
                      />
                    </div>
                    <button type="button" onClick={closeModal} className="p-2">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                    </button>
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

export default Search
