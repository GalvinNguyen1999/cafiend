import Instagram from '@/components/sections/instagram'
import Banner from '@/components/sections/banner'
import Lettalk from '@/components/sections/contact/lettalk'
import Googlemap from '@/components/sections/contact/googlemap'

const Page = () => {
  return (
    <>
      <Banner title='contact us' />
      <Lettalk />
      <Googlemap />
      <Instagram />
    </>
  )
}

export default Page
