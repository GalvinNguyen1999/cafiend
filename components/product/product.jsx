import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button'

const Product = ({ data }) => {
  const { name, slug, image, price } = data
  return (
    <div>
      <div className="py-[30px] px-2.5 text-center rounded-md border border-[#0101011a] hover:border-cf-black md:px-[30px]">
        <div>
          <Link href={`/product/${slug}`} className="text-[42px] font-oswald font-bold my-0 uppercase sm:text-[52px] md:text-[56px] lg:text-[64px]">
            {name}
          </Link>
          <p className="mt-0">& {price} USD</p>
        </div>

        <div className="py-8">
          <Link href={`/product/${slug}`} className="flex justify-center">
            <Image
              src={image}
              alt='product'
              width={222}
              height={341}
              priority
            />
          </Link>
        </div>
        <div>
          <Button
            title='add to card'
            href={`/product/${slug}`}
            className='border-cf-black text-cf-black bg-transparent hover:text-cf-milk hover:bg-cf-black hover:border-cf-black'
          />
        </div>
      </div>
    </div>
  )
}

export default Product
