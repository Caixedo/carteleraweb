import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font bg-blue-500/90 h-16 fixed w-full z-50">
      <div className="flex justify-between items-center py-3 px-4 h-full">
        <a href='/' className="title-font font-medium text-gray-900 cursor-pointer">
          <p className="text-xl text-white">Antara</p>
        </a>
        <button onClick={toggleMenu} className={`text-2xl text-white border p-1 rounded-xl ${isOpen ? "hidden" : ""} sm:hidden`}>
          <GiHamburgerMenu />
        </button>
        <nav className={` ${isOpen ? "" : "hidden"} flex flex-col items-end gap-3 sm:inline-block
        absolute top-0 right-0 h-screen sm:static sm:h-full text-base
        sm:justify-center bg-gray-400/95 sm:bg-inherit p-6 sm:p-0 text-white
        `}>
          <button onClick={toggleMenu} className="text-2xl text-white sm:hidden">
            <AiOutlineClose />
          </button>
          <ul className="flex flex-wrap flex-col h-full items-center sm:flex-row gap-3">
            <li>
              <a href='#cartelera' className="hover:text-gray-900 cursor-pointer">Cartelera informativa</a>
            </li>
            <li>
              <a href='#horario' className="hover:text-gray-900 cursor-pointer">Horarios del Shut</a>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  )
}
