import Navbar from './navbar/navbar'

const Header = () => {
  return (
    <>
      <div className="hidden md:block bg-cf-black md:py-2">
        <div className="px-4">
          <p className="text-sm text-cf-milk text-center lg:text-base">
            Welcome To Early Birds we Ship Every Teusday And Thusrday Free Shipping In The Netherlande
          </p>
        </div>
      </div>
      <Navbar />
    </>
  )
}

export default Header
