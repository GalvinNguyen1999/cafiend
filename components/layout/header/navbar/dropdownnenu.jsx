'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' }
]

const DropDownMenu = () => {
  return (
    <Menu as="div">
      <Menu.Button className="font-medium rounded-md text-sm p-2.5 sm:p-3.5 text-center inline-flex items-center lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="absolute right-0 top-16 left-0 bg-cf-milk text-cf-black">
          {links.map((link) => (
            <Menu.Item key={link.href} as={Fragment}>
              {({ active }) => (
                <Link
                  href={link.href}
                  className={`${active ? 'block p-5 font-semibold font-oswald underline uppercase' : 'block p-5 font-semibold font-oswald no-underline uppercase'}`}
                >
                  {link.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDownMenu
