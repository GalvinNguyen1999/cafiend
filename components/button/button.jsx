import Link from 'next/link'

const Button = ({ title, href, className }) => {
  return (
    <Link href={href} className={`text-lg py-4 px-10 mt-8 inline-block uppercase border rounded-md transition-all duration-200 sm:px-[60px] ${className}`}>
      {title}
    </Link>
  )
}

export default Button
