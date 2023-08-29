const Banner = ({ title }) => {
  return (
    <div className="bg-[url('/images/bghero.webp')] bg-cover bg-center py-[120px] md:py-[140px] lg:py-[160px]">
      <h1 className="text-[38px] font-oswald font-bold uppercase text-center text-cf-milk sm:text-[64px] lg:text-[72px]">{title}</h1>
    </div>
  )
}

export default Banner
