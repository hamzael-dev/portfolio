import { motion } from "framer-motion";
import { skills } from "../../data/skills";


export default function Skills(){

  return (

    <section 
      id="skills"
      className="px-6 py-32"
    >

      <div className="max-w-6xl mx-auto">


        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
        ">
          My{" "}
          <span className="
            bg-gradient-to-r
            from-purple-400
            to-cyan-400
            bg-clip-text
            text-transparent
          ">
            Skills
          </span>
        </h2>



        <div className="mt-12 space-y-10">


        {
          skills.map((group,index)=>(

            <div key={index}>

              <h3 className="
                mb-5
                text-xl
                text-gray-300
                font-semibold
              ">
                {group.category}
              </h3>


              <div className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-5
              ">


              {
                group.items.map((skill,i)=>{

                  const Icon = skill.icon;


                  return (

                    <motion.div

                      key={i}

                      initial={{
                        opacity:0,
                        y:30
                      }}

                      whileInView={{
                        opacity:1,
                        y:0
                      }}

                      viewport={{
                        once:true
                      }}

                      transition={{
                        delay:i*0.1
                      }}

                      className="
                      group
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-6
                      flex
                      flex-col
                      items-center
                      gap-4
                      backdrop-blur-xl
                      hover:bg-white/10
                      transition
                      "
                    >


                      <Icon 
                        size={45}
                        className="
                        text-purple-400
                        group-hover:scale-110
                        transition
                        "
                      />


                      <span className="
                        text-gray-300
                      ">
                        {skill.name}
                      </span>


                    </motion.div>

                  )

                })
              }


              </div>

            </div>


          ))
        }


        </div>


      </div>


    </section>

  )

}