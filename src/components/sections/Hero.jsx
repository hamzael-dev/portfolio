import { motion } from "framer-motion";
// import { GitHub, Linkedin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          inline-flex items-center gap-2
          rounded-full
          border border-white/10
          bg-white/5
          px-5 py-2
          text-sm text-gray-300
          backdrop-blur-xl
          "
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for work
        </motion.div>


        {/* Title */}

        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{delay:.2}}
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
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.4}}
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
          initial={{opacity:0,y:20}}
          animate={{opacity:1,y:0}}
          transition={{delay:.6}}
          className="
          mt-10
          flex
          justify-center
          gap-4
          flex-wrap
          "
        >

          <button
          className="
          flex items-center gap-2
          rounded-xl
          bg-white
          px-6 py-3
          font-semibold
          text-black
          transition
          hover:scale-105
          "
          >
            <Download size={18}/>
            Download CV
          </button>


          <button
          className="
          rounded-xl
          border border-white/20
          bg-white/5
          px-6 py-3
          backdrop-blur-xl
          transition
          hover:bg-white/10
          "
          >
            View Projects
          </button>

        </motion.div>


        {/* Social */}

        <div className="
          mt-10
          flex
          justify-center
          gap-5
        ">

          <FaGithub
          className="
          cursor-pointer
          text-gray-400
          hover:text-white
          "
          />

          <FaLinkedin
          className="
          cursor-pointer
          text-gray-400
          hover:text-white
          "
          />

        </div>


      </div>


    </section>
  )
}