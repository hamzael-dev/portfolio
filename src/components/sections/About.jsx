import { motion } from "framer-motion";
import { Code2, Rocket, Database } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Code2,
      title: "Full Stack",
      text: "Building modern web applications with clean and scalable code."
    },
    {
      icon: Database,
      title: "Backend",
      text: "Experienced with Laravel, Express, MySQL and MongoDB."
    },
    {
      icon: Rocket,
      title: "Projects",
      text: "Creating real-world solutions like POS, E-commerce and management systems."
    }
  ];

  return (
    <section 
      id="about"
      className="px-6 py-32"
    >

      <div className="mx-auto max-w-6xl">

        {/* Title */}

        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >
          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            About <span className="
              bg-gradient-to-r
              from-purple-400
              to-cyan-400
              bg-clip-text
              
            ">
              Me
            </span>
          </h2>

          <p className="
            mt-6
            max-w-3xl
            text-gray-400
            text-lg
          ">
            I'm Hamza El Azrak, a Full Stack Developer passionate about
            creating modern, fast and user-friendly applications.
            I work mainly with Laravel, React, Node.js and Docker.
          </p>

        </motion.div>


        {/* Cards */}

        <div className="
          mt-12
          grid
          gap-6
          md:grid-cols-3
        ">

          {
            cards.map((card,index)=>{

              const Icon = card.icon;

              return (

                <motion.div
                  key={index}
                  initial={{opacity:0,y:40}}
                  whileInView={{opacity:1,y:0}}
                  transition={{delay:index * 0.2}}
                  viewport={{once:true}}

                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition
                  hover:-translate-y-2
                  hover:bg-white/10
                  "
                >

                  <Icon 
                    size={35}
                    className="text-purple-400"
                  />

                  <h3 className="
                    mt-5
                    text-xl
                    font-semibold
                  ">
                    {card.title}
                  </h3>


                  <p className="
                    mt-3
                    text-gray-400
                  ">
                    {card.text}
                  </p>


                </motion.div>

              )

            })
          }


        </div>

      </div>

    </section>
  )
}