import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="mt-9 border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Experiences
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 lg:justify-center flex flex-wrap ">
            <div className="w-full lg:w-1/4">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
              />
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className=" w-full max-w-xl lg:3/4"
            >
              <h6 className="mb-2  font-semibold ">{project.title}</h6>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 px-2 py-1 text-purple-800 bg-neutral-900 text-sm"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
