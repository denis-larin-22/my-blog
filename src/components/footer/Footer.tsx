import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { login } from "../admin/login";
import Avatar from "../common/Avatar";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "../common/ContactsIcons";
import { _createAnimation } from "../../_utils/_createAnimation";


interface IProps {
    authAdmin: (state: boolean) => void;
}

export const Footer = ({ authAdmin }: IProps) => {
    const authBtnHandler = () => {
        login(authAdmin);
    }

    const icons = [
        { name: "Telegram", icon: <TelegramIcon />, link: 'https://t.me/den4ik_larin' },
        { name: "GitHub", icon: <GitHubIcon />, link: 'https://github.com/denis-larin-22' },
        { name: "LinkedIn", icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/denis-larin-a12a31241/' }
    ];

    const [initFooterWrap, animFooterWrap, transitionFooterWrap] = _createAnimation({ y: '40%', opacity: 0, delay: 1.5 })

    return (
        <motion.div
            initial={initFooterWrap}
            animate={animFooterWrap}
            transition={transitionFooterWrap}
            className="bg-[#F6F6F7] dark:bg-dark-high p-5 dark:text-gray-text"
        >
            <footer className="container flex flex-col gap-2 md:flex-row items-center justify-between">
                <div className="flex items-start gap-2">
                    <span className="hidden sm:inline" onClick={authBtnHandler}>
                        <Avatar size="large" />
                    </span>
                    <div className="">
                        <p className="font-semibold text-lg">Contacts</p>
                        <p className=""><span className="font-semibold">Email:</span> denislarin2017@gmail.com</p>
                        <a href="tel:380981268508"><span className="font-semibold">Tel:</span> +380 98 126 85 08</a>
                    </div>
                </div>
                <ul className="flex gap-x-3">
                    {
                        icons.map((item, index) => (
                            <li key={index}>
                                <Tooltip content={item.name}>
                                    <a href={item.link} target="blank" >{item.icon}</a>
                                </Tooltip>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </motion.div>
    )
}