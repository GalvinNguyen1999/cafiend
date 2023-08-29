import Link from 'next/link'
import Image from 'next/image'
import DropDownMenu from './dropdownnenu'
import Cart from '@/components/cart/cart'
import Search from './search'
import logo from '@/public/logo.svg'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' }
]

const Navbar = () => {
  return (
    <nav className="h-full z-10 py-2.5 lg:py-1.5 sticky top-0 bg-cf-milk shadow-md">
      <div className="px-4 xl:px-10 grid grid-cols-2 lg:grid-cols-navigation justify-items-end items-center justify-between gap-x-4">
        <div className="hidden lg:block justify-self-start py-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-lg font-oswald font-semibold p-4 first:pl-0 last:pr-0 hover:underline">
              {link.label}
            </Link>
          ))}
        </div>

        {/* logo */}
        <Link href="/" className="justify-self-start">
          <Image
            src={logo}
            alt="Logo Cafiend"
            width={140}
            height={140}
            priority
          />
        </Link>

        <div className='flex items-center w-full gap-2 justify-end'>
          <Search />
          <Cart />
          <DropDownMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
