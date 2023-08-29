import Hero from '@/components/sections/hero'
import Listproduct from '@/components/sections/listproduct'
import Info from '@/components/sections/info'
import Menu from '@/components/sections/menu'
import Testimonial from '@/components/sections/testimonial'
import Posts from '@/components/sections/posts'
import Instagram from '@/components/sections/instagram'

export default function Home() {
  return (
    <main>
      <Hero />
      <Listproduct />
      <Info />
      <Menu />
      <Testimonial />
      <Posts />
      <Instagram />
    </main>
  )
}
