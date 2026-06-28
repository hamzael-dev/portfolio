import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);


  const links = [
    {
      name: "Home",
      href: "#home"
    },
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ];


  return (

    <header
    className={`
      fixed
      top-5
      left-1/2
      z-50
      w-[90%]
      max-w-5xl
      -translate-x-1/2
      transition-all

      ${
        scrolled
        ?
        "scale-95"
        :
        ""
      }
    `}
    >

      <nav
      className="
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-6
      py-4
      backdrop-blur-xl
      "
      >

        <a
        href="#home"
        className="
        text-xl
        font-bold
name-gradient 
        bg-clip-text
        "
        >
          Hamza.dev
        </a>


        <ul
        className="
        hidden
        md:flex
        gap-8
        text-sm
        text-gray-300
        "
        >

        {
          links.map(link=>(
            <li key={link.name}>

              <a
              href={link.href}
              className="
              hover:text-white
              transition
              "
              >
                {link.name}
              </a>

            </li>
          ))
        }

        </ul>



        <button
        onClick={()=>setOpen(!open)}
        className="md:hidden"
        >

          {
            open
            ?
            <X/>
            :
            <Menu/>
          }

        </button>


      </nav>


      {
        open && (

          <div
          className="
          mt-3
          rounded-2xl
          border
          border-white/10
          bg-black/70
          p-5
          backdrop-blur-xl
          md:hidden
          "
          >

          {
            links.map(link=>(

              <a
              key={link.name}
              href={link.href}
              onClick={()=>setOpen(false)}
              className="
              block
              py-2
              text-gray-300
              hover:text-white
              "
              >
                {link.name}
              </a>

            ))
          }

          </div>

        )
      }


    </header>

  )
}