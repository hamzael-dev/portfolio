import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 " id="home">

      <div className="max-w-5xl text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          className="mt-6 text-lg text-gray-400"
        >

          <p>
            Full Stack Developer
          </p>


          <div className="
mt-3
text-xl
md:text-2xl
font-semibold
">

            <TypeAnimation

              sequence={[
                "Laravel Developer",
                1500,
                "React Developer",
                1500,
                "Full Stack Developer",
                1500,
                "Building Modern Web Apps",
                1500
              ]}

              speed={50}

              repeat={Infinity}

            />

          </div>


        </motion.div>


        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="
          mt-8
          text-5xl
          md:text-7xl
          font-extrabold
          leading-tight
          "
        >

          Hi, I'm{" "}

          <span
            className="
          bg-gradient-to-r
          from-purple-400
          via-pink-400
          to-cyan-400
          bg-clip-text
          text-transparent
          "
          >
            Hamza El Azrak
          </span>

        </motion.h1>


        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="
          mt-6
          mx-auto
          max-w-2xl
          text-lg
          text-gray-400
          "
        >
          Full Stack Developer specialized in building modern
          web applications using Laravel, React, Node.js and Docker.
        </motion.p>


        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .6 }}
          className="
          mt-10
          flex
          justify-center
          gap-4
          flex-wrap
          "
        >

          <a
            href="/cv/hamza-elazrak-dev.pdf"
            download
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:scale-105
              "
          >

            <Download size={18} />

            Download CV

          </a>

          <a

            href="#projects"

            className="
            rounded-xl
            border
            border-white/20
            bg-white/5
            px-6
            py-3
            backdrop-blur-xl
            transition
            hover:bg-white/10
            "

          >

            View Projects

          </a>

        </motion.div>


        {/* Social */}

        <div className="
          mt-10
          flex
          justify-center
          gap-5
        ">
          <a
            href="https://github.com/hamzael-dev"
            target="_blank"
            className="
            cursor-pointer
            text-gray-400
            hover:text-white
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/212609027925"
            target="_blank"
            rel="noreferrer"
            className="
              cursor-pointer
            text-gray-400
            hover:text-white
              "
          >
            <FaWhatsapp />
          </a>



        </div>


      </div>


    </section>
  )
}