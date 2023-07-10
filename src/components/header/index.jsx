import LogoSVG from "./logo"

export const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-blue-500/90">
      <div className="container mx-auto flex flex-wrap py-3 px-4 flex-col md:flex-row items-center">
        <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <LogoSVG width={150} color={"#fff"} />
          <span className="ml-3 text-xl text-white">Antara</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white gap-3">
          <a href='#cartelera' className="hover:text-gray-900 cursor-pointer">Cartelera informativa</a>
          <a href='#horario' className="hover:text-gray-900 cursor-pointer">Horarios del Shut</a>
        </nav>
      </div>
    </header>
  )
}
