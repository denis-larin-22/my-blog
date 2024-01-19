import { motion } from "framer-motion";
import ThemeSwitcher from "../header/ThemeSwitcher";

export const Greetings = () => {
    const transition = {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
    }

    return (
        <motion.div
            className="h-screen w-screen flex items-center justify-center gap-5 dark:bg-dark dark:text-white-matte text-4xl sm:text-6xl lg:text-9xl font-semibold overflow-hidden"
        >
            <motion.p
                initial={{ y: "250%" }}
                animate={{
                    y: ["250%", "0%", "-10%", "-250%"],
                    opacity: [0, 1, 1, 0]
                }}
                transition={transition}
            // className="absolute top-[0%]"
            >Hello</motion.p>
            <motion.p
                initial={{ y: "-250%" }}
                animate={{
                    y: ["-250%", "0%", "10%", "250%"],
                    opacity: [0, 1, 1, 0]
                }}
                transition={transition}
                className=""
            >world!</motion.p>
            <ThemeSwitcher switcherStyles="hidden" />
        </motion.div>
    )
}