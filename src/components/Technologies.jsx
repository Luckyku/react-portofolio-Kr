import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaLaravel, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="mt-9">
      <motion.h2
        initial= {{ y: -100, opacity:0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      className="my-20 text-4xl text-center">Technologies</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <RiReactjsLine className="text-cyan-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <TbBrandNextjs className="text-green-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <FaLaravel className="text-red-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <BiLogoPostgresql className="text-sky-700 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <FaNodeJs className="text-green-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <RiTailwindCssLine className="text-sky-500 text-7xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
