import { Button, Tooltip } from "@nextui-org/react";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "./ContactsIcons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { _createAnimation } from "../../_utils/_createAnimation";

interface ICommentValues {
    email: string,
    question: string
}

const Contacts = () => {
    const { t } = useTranslation();
    // Animations
    const [initWrap, animateWrap] = _createAnimation({ y: "-20%", opacity: 0 });
    const [initLink, animateLink, transitionLink] = _createAnimation({ y: "-20%", opacity: 0, duration: 0.5 });
    const [initForm, animateForm, transitionForm] = _createAnimation({ y: "-30%", opacity: 0, duration: 0.5 });
    const [initSent, animateSent, transitionSent] = _createAnimation({ opacity: 0, y: '100%' });


    const icons = [
        { name: "Telegram", icon: <TelegramIcon />, link: 'https://t.me/den4ik_larin' },
        { name: "GitHub", icon: <GitHubIcon />, link: 'https://github.com/denis-larin-22' },
        { name: "LinkedIn", icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/denis-larin-a12a31241/' }
    ];

    const initInputsValues: ICommentValues = {
        email: '',
        question: ''
    }
    const [inputsValues, setInputsValues] = useState(initInputsValues);
    const [isSent, setIsSent] = useState(false);
    const questionSendHandler = () => {
        const questionObj = inputsValues;
        console.log(questionObj);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
        setInputsValues(initInputsValues);
    }

    return (
        <motion.section
            layout
            className="bg-gray-light dark:bg-dark-light dark:text-white-matte px-5 py-12 flex flex-col gap-y-6 items-center justify-center"
            initial={initWrap}
            animate={animateWrap}
            exit={initWrap}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
            <ul className="flex gap-x-3">
                {
                    icons.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={initLink}
                            animate={animateLink}
                            transition={{ ...transitionLink, delay: (index / 3) + 0.2 }}
                        >
                            <Tooltip content={item.name}>
                                <a href={item.link} target="blank" >{item.icon}</a>
                            </Tooltip>
                        </motion.li>
                    ))
                }
            </ul>
            <motion.form
                className="bg-white dark:bg-dark dark:shadow-lg dark:border-2 dark:border-dark rounded-xl p-8 flex flex-col max-w-96 gap-y-2 items-center"
                initial={initForm}
                animate={animateForm}
                transition={transitionForm}
            >
                <label htmlFor="email" className="mb-5 text-xl font-semibold">{t("tGotQuestion")}</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="rounded-md text-black-light dark:text-white-matte py-3 px-3 border-2 border-[#DCDDDF] focus:outline-gray-text dark:bg-dark-light dark:focus:outline-gray-text"
                    value={inputsValues.email}
                    onChange={(e) => setInputsValues({ ...inputsValues, email: e.target.value })}

                />
                <textarea
                    placeholder={t("tQuestion")}
                    cols={10}
                    rows={2}
                    className="rounded-md w-full text-black-light dark:text-white-matte py-3 px-3 border-2 border-[#DCDDDF] focus:outline-gray-text dark:bg-dark-light dark:focus:outline-gray-text"
                    value={inputsValues.question}
                    onChange={(e) => setInputsValues({ ...inputsValues, question: e.target.value })}
                ></textarea>

                {
                    inputsValues.email.length !== 0 &&
                        inputsValues.question.length !== 0 ?
                        <Button className="w-full" color="primary" onClick={questionSendHandler}>Send</Button>
                        :
                        null
                }
            </motion.form>

            <AnimatePresence>
                {isSent && <motion.p
                    initial={initSent}
                    animate={animateSent}
                    exit={initSent}
                    transition={transitionSent}
                    className="font-semibold"
                >
                    ✔️{t("tThanks")}
                </motion.p>}
            </AnimatePresence>
        </motion.section>
    )
}

export default Contacts;