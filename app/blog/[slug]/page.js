import Instagram from '@/components/sections/instagram'

const Page = ({ params }) => {
  return (
    <>
      <section className="py-[60px]">
        <div className="px-4">
          <h1 className="text-[48px] font-oswald font-bold uppercase mb-2.5">
            {params.slug.split('-').join(' ').toUpperCase()}
          </h1>
          <p>
            Coffee is a popular beverage enjoyed by millions of people around the world.
          </p>
        </div>
      </section>
      <Instagram />
    </>
  )
}

export default Page
