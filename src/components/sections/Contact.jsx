import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {

    return (

        <section
            id="contact"
            className="px-6 py-32"
        >

            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    md:p-12
                    backdrop-blur-xl
                    "
                >


                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        ">
                        Let's work{" "}
                        <span className="
  name-gradient
                            bg-clip-text
                           
                            ">
                            together
                        </span>
                    </h2>


                    <p className="
                        mt-5
                        max-w-2xl
                        text-gray-400
                        text-lg
                        ">
                        I'm always open to discussing new projects,
                        creative ideas or opportunities.
                    </p>



                    <div className="
                        mt-10
                        flex
                        flex-wrap
                        gap-4
                        ">


                        <a
                            href="mailto:hamzaelazrak8@gmail.com"
                            className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-white
                            px-6
                            py-3
                            text-black
                            font-semibold
                            "
                        >
                            <Mail size={18} />
                            Email Me
                        </a>


                        <a
                            href="https://github.com/hamzael-dev"
                            target="_blank"
                            className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-white/20
                            px-6
                            py-3
                            "
                        >
                            <FaGithub size={18} />
                            Github
                        </a>


                        <a
                            href="https://wa.me/212609027925"
                            target="_blank"
                            rel="noreferrer"
                            className="
                            flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-white/20
                            px-6
                            py-3
                            hover:bg-white/10
                            transition
                            "
                        >
                            <FaWhatsapp size={20} />
                            WhatsApp
                        </a>


                    </div>


                </motion.div>

            </div>


        </section>

    )
}