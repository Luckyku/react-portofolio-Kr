import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="mt-9 border-b border-neutral-900 pb-4">
      <motion.h2
      initial= {{ y: -50, opacity:0 }} 
      whileInView={{ y:0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Experiences</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 lg:justify-center flex flex-wrap ">
            <motion.div
            initial= {{ x:-100, opacity:0 }}
            whileInView={{  x:0, opacity:1 }}
            transition={{ duration: 1, delay:0.5 }}
            className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
            initial= {{ x:100, opacity:0 }}
            whileInView={{  x:0, opacity:1 }}
            transition={{ duration: 1, delay:0.5 }}
            className=" w-full max-w-xl lg:3/4">
                <h6 className="mb-2  font-semibold ">{experience.role} - <span>{experience.company}</span></h6>
                <p className="mb-2 text-neutral-400">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                    <span className="bg-neutral-900 rounded p-2 mr-2 text-purple-800 text-sm" key={index}>{tech}</span>
                ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
