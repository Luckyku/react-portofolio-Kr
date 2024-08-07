import AboutImg from "../assets/about.jpg"
import {ABOUT_TEXT} from "../constants"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-9 border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl ">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-center">
            <motion.img
            initial={{ x:-100, opacity:0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }} className="rounded-2xl" src={AboutImg} alt="About" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
            initial={{ x:100, opacity:0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }} className="my-6 lg:my-0 max-w-xl">{ABOUT_TEXT}</motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
