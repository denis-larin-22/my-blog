import Avatar from "./Avatar";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            className="bg-gray-light dark:bg-dark-light dark:text-white-matte px-5 py-12 flex flex-col gap-y-6 items-center justify-center"
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-20%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
            <motion.div className="flex items-center gap-x-4 ">
                <Avatar size="large" />
                <div className="">
                    <h3 className="text-xl font-semibold">Denis Larin</h3>
                    <p className="text-gray-text">Front-End developer</p>
                </div>
            </motion.div>
            <p className="max-w-[600px] text-lg leading-7 text-center">
                Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.
            </p>
        </motion.section>
    )
}

export default AboutMe;