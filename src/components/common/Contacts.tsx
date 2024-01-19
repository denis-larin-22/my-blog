import { Button } from "@nextui-org/react";
import Avatar from "./Avatar";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "./ContactsIcons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ICommentValues {
    email: string,
    question: string
}

const Contacts = () => {
    const icons = [{ icon: <TelegramIcon />, link: 'https://t.me/den4ik_larin' }, { icon: <GitHubIcon />, link: 'https://github.com/denis-larin-22' }, { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/denis-larin-a12a31241/' }];

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
        <motion.section layout
            className="bg-gray-light dark:bg-dark-light dark:text-white-matte px-5 py-12 flex flex-col gap-y-6 items-center justify-center"
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-20%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
            <ul className="flex gap-x-3">
                {
                    icons.map((item, index) => (
                        <li key={index}>
                            <a href={item.link} target="blank" >{item.icon}</a>
                        </li>
                    ))
                }
            </ul>
            <form className="bg-white dark:bg-dark dark:shadow-lg dark:border-2 dark:border-dark rounded-xl p-8 flex flex-col max-w-96 gap-y-2 items-center">
                <label htmlFor="email" className="mb-5 text-xl font-semibold">Got a question?</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="rounded-md text-black-light dark:text-white-matte py-3 px-3 border-2 border-[#DCDDDF] focus:outline-gray-text dark:bg-dark-light dark:focus:outline-gray-text"
                    value={inputsValues.email}
                    onChange={(e) => setInputsValues({ ...inputsValues, email: e.target.value })}

                />
                <textarea
                    placeholder="Question"
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
            </form>

            <AnimatePresence>
                {isSent && <motion.p
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="font-semibold"
                >✔️Thank you!</motion.p>}
            </AnimatePresence>
        </motion.section>
    )
}

export default Contacts;