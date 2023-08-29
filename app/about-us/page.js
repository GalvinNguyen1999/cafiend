import Banner from '@/components/sections/banner'
import Complement from '@/components/sections/about/complement'
import Service from '@/components/sections/about/service'
import Timeline from '@/components/sections/about/timeline'
import Video from '@/components/sections/about/video'
import Testimonial from '@/components/sections/testimonial'
import Instagram from '@/components/sections/instagram'

const About = () => {
  return (
    <>
      <Banner title='About Us' />
      <Complement />
      <Service />
      <Timeline />
      <Video />
      <Testimonial />
      <Instagram />
    </>
  )
}

export default About
