import Banner from '@/components/sections/banner'
import Infomation from '@/components/product/infomation'
import Review from '@/components/product/review'
import Instagram from '@/components/sections/instagram'

export default function Page({ params }) {
  return (
    <>
      <Banner title='Shop Detail' />
      <Infomation params={params} />
      <Review />
      <Instagram />
    </>
  )
}