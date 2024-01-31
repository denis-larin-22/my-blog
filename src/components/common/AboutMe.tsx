import { t } from "i18next";
import Avatar from "./Avatar";
import { motion } from "framer-motion";
import { _createAnimation } from "../../_utils/_createAnimation";

const AboutMe = () => {
    // Animations
    const [initWrap, animateWrap, transitionWrap] = _createAnimation({ y: "-20%", opacity: 0 });
    const [initAvatar, animateAvatar, transitionAvatar] = _createAnimation({ x: "-30%", opacity: 0, delay: 0.4, duration: 0.5 });
    const [initH3, animateH3, transitionH3] = _createAnimation({ y: "-30%", opacity: 0, delay: 0.6, duration: 0.5 });
    const [initDeveloper, animateDeveloper, transitionDeveloper] = _createAnimation({ y: "30%", opacity: 0, delay: 0.8, duration: 0.4 });
    const [initIntroduction, animateIntroduction, transitionIntroduction] = _createAnimation({ opacity: 0, delay: 1, duration: 1.2 });

    return (
        <motion.section
            className="bg-gray-light dark:bg-dark-light dark:text-white-matte px-5 py-12 flex flex-col gap-y-6 items-center justify-center"
            initial={initWrap}
            animate={animateWrap}
            exit={initWrap}
            transition={transitionWrap}
        >
            <div className="flex items-center gap-x-4 ">
                <motion.span
                    initial={initAvatar}
                    animate={animateAvatar}
                    transition={transitionAvatar}
                >
                    <Avatar size="large" />
                </motion.span>
                <div className="">
                    <motion.h3
                        className="text-xl font-semibold"
                        initial={initH3}
                        animate={animateH3}
                        transition={transitionH3}
                    >
                        Denis Larin
                    </motion.h3>
                    <motion.p
                        className="text-gray-text"
                        initial={initDeveloper}
                        animate={animateDeveloper}
                        transition={transitionDeveloper}
                    >
                        Front-End developer
                    </motion.p>
                </div>
            </div>
            <motion.p
                className="max-w-[600px] text-lg leading-7 text-center"
                initial={initIntroduction}
                animate={animateIntroduction}
                transition={transitionIntroduction}
            >
                {t("tIntroduction")}
            </motion.p>
        </motion.section>
    )
}

export default AboutMe;