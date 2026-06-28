import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open,setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ];

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2">

      <nav className="
        flex items-center justify-between
        rounded-2xl
        border border-white/10
        bg-white/5
        px-6 py-4
        backdrop-blur-xl
      ">

        {/* Logo */}

        <h1 className="
          text-xl font-bold
          bg-gradient-to-r from-purple-400 to-cyan-400
          bg-clip-text text-transparent
        ">
          Hamza.dev
        </h1>


        {/* Desktop */}

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">

          {links.map((link)=>(
            <li 
              key={link}
              className="
              cursor-pointer
              transition
              hover:text-white
              "
            >
              {link}
            </li>
          ))}

        </ul>


        {/* Mobile Button */}

        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden"
        >
          {
            open 
            ? <X/>
            : <Menu/>
          }
        </button>


      </nav>


      {/* Mobile Menu */}

      {
        open && (
          <div className="
            mt-3 rounded-2xl
            border border-white/10
            bg-black/70
            p-5
            backdrop-blur-xl
            md:hidden
          ">
            {
              links.map(link=>(
                <p
                  key={link}
                  className="py-2 text-gray-300 hover:text-white"
                >
                  {link}
                </p>
              ))
            }
          </div>
        )
      }


    </header>
  )
}