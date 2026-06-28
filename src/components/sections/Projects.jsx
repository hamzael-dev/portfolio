import { motion } from "framer-motion";
import {ExternalLink } from "lucide-react";
import { FaGithub} from "react-icons/fa";
import { projects } from "../../data/projects";


export default function Projects(){

return (

<section
id="projects"
className="px-6 py-32"
>

<div className="max-w-6xl mx-auto">


<h2 className="
text-4xl
md:text-5xl
font-bold
">

Featured{" "}

<span className="
bg-gradient-to-r
from-purple-400
to-cyan-400
bg-clip-text

">
Projects
</span>

</h2>



<div className="
mt-12
grid
md:grid-cols-2
gap-8
">


{
projects.map((project,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

className="
group
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
"

>


{/* Image */}

<div className="
overflow-hidden
">

<img
src={project.image}
alt={project.title}
className="
h-60
w-full
object-cover
transition
duration-500
group-hover:scale-110
"
/>

</div>



<div className="p-6">


<h3 className="
text-2xl
font-bold
">
{project.title}
</h3>


<p className="
mt-3
text-gray-400
">
{project.description}
</p>



<div className="
mt-5
flex
flex-wrap
gap-2
">

{
project.technologies.map((tech,i)=>(

<span
key={i}
className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
text-sm
text-gray-300
"
>
{tech}
</span>

))
}

</div>



<div className="
mt-6
flex
gap-4
">


<a
href={project.github}
target="_blank"
className="
flex
items-center
gap-2
rounded-xl
border
border-white/20
px-4
py-2
hover:bg-white/10
"
>
<FaGithub size={18}/>
Github
</a>



<a
href={project.demo}
className="
flex
items-center
gap-2
rounded-xl
bg-white
px-4
py-2
text-black
"
>
<ExternalLink size={18}/>
Demo
</a>


</div>



</div>


</motion.div>


))

}



</div>


</div>


</section>

)

}