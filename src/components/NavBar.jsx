import { useState } from "react"


const navbarLinks = [
  {id: 1, title: 'Inicio', link: '/'},
  {id: 2, title: 'Equipos', link: '/#equipos'},
  {id: 3, title: 'Blog', link: '/#blog'},
  {id: 4, title: 'Calendario', link: '/#calendario'},
  {id: 5, title: 'Contacto', link: '/#contacto'}
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className="flex items-center justify-center">
        {/* VIEW DESKTOP */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={toggleMenu}
        >

          {/* Uso de iconos SVG para abrir y cerrar menú hamburguesa */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24 "
            >
            { isOpen // Renderizado condicional
              ? <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" // X
                />
              : <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" // Burger
                />
            }
          </svg>
        </button>
        <div>
          <ul className="hidden md:flex gap-2">
            { navbarLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}
                    className="text-white font-semibold py-2 px-4 rounded hover:bg-[rgba(255,255,255,0.2)]"
                  >{item.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full top-24 left-0 bg-gray-800/80 ${isOpen ? 'block' : 'hidden'} `}>
          <ul className="flex flex-col items-center">
            { navbarLinks.map((item, index) => (
              <li key={index} className="w-full text-center">
                <a href={item.link}
                  className="block w-full text-white font-semibold py-4 px-4 transition-all duration-150 hover:bg-[rgba(255,255,255,0.2)]"
                >{item.title}
                </a>
              </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar