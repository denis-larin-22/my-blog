import './index.css';
import Avatar from '../common/Avatar';
import ThemeSwitcher from './ThemeSwitcher';
import { Button, Link, Navbar, NavbarMenuToggle } from '@nextui-org/react';
import AboutMe from '../common/AboutMe';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Contacts from '../common/Contacts';
import BurgerBtn from './BurgerBtn';

export const Header = () => {
    const [isAboutMeVissible, setIsAboutMeVissible] = useState(false);
    const [isContactsVissible, setIsContactsVissible] = useState(false);
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);

    const vissibleToggler = (btnName: string): void => {
        switch (btnName) {
            case 'aboutMe':
                setIsAboutMeVissible(!isAboutMeVissible);
                setIsContactsVissible(false);
                break;
            case 'contacts':
                setIsContactsVissible(!isContactsVissible);
                setIsAboutMeVissible(false);
                break;
            default: return;
        }
    }

    return (
        <>
            <header className="container max-h-20 p-5 flex items-center justify-between dark:text-white-matte">
                <div className='cursor-pointer text-xl font-semibold flex items-center gap-2' onClick={() => vissibleToggler('aboutMe')}>
                    <Avatar size='large' />
                    My Blog
                </div>
                <nav className="text-black-light dark:text-white-matte hidden lg:flex gap-10 ">
                    <Button as={Link} href='#posts' variant='light'>Blog</Button>
                    <Button
                        variant='light'
                        onClick={() => vissibleToggler('aboutMe')}
                    >About me</Button>
                    <Button as={Link} href='https://denis-larin-22.github.io/my-portfolio/' target='blanc' variant='light'>Portfolio</Button>
                    <Button
                        name='contacts'
                        variant='light'
                        onClick={() => vissibleToggler('contacts')}
                    >Contacts</Button>
                </nav>
                <div className='relative hidden lg:flex items-center gap-3'>
                    <label htmlFor="search" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g id="search-outline">
                                <path id="Vector" d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z" stroke="#52525B" strokeWidth="1.5" strokeMiterlimit="10" />
                                <path id="Vector_2" d="M10.5715 10.5716L14 14" stroke="#52525B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                            </g>
                        </svg>
                    </label>
                    <input type="text" id='search' className="max-w-44 h-9 p-2 pl-4 bg-[#F4F4F5] dark:bg-[#52525B] rounded-md border-none focus:outline-gray-text text-sm leading-5" placeholder="Search" />
                    <ThemeSwitcher switcherStyles='hidden lg:inline' />
                </div>
                <BurgerBtn styles='block lg:hidden' togglerMenuVissibleState={() => setIsOpenNavbar(!isOpenNavbar)} />
            </header>

            <AnimatePresence>
                {isOpenNavbar &&
                    <motion.div
                        className="container block lg:hidden bg-gray-light dark:bg-dark-light pb-4"
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-20%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                        <nav className='flex flex-col'>
                            <Button as={Link} href='#posts' variant='light'>Blog</Button>
                            <Button
                                variant='light'
                                onClick={() => vissibleToggler('aboutMe')}
                            >About me</Button>
                            <Button as={Link} href='https://denis-larin-22.github.io/my-portfolio/' target='blanc' variant='light'>Portfolio</Button>
                            <Button
                                name='contacts'
                                variant='light'
                                onClick={() => vissibleToggler('contacts')}
                            >Contacts</Button>
                        </nav>
                        <div className='relative flex items-center justify-center gap-3'>
                            <label htmlFor="search" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g id="search-outline">
                                        <path id="Vector" d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z" stroke="#52525B" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path id="Vector_2" d="M10.5715 10.5716L14 14" stroke="#52525B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </label>
                            <input type="text" id='search' className="max-w-44 h-9 p-2 pl-4 bg-[#F4F4F5] dark:bg-[#52525B] rounded-md border-none focus:outline-gray-text text-sm leading-5" placeholder="Search" />
                            <ThemeSwitcher />
                        </div>
                    </motion.div>}
            </AnimatePresence>

            <AnimatePresence>
                {isAboutMeVissible && <AboutMe />}
                {isContactsVissible && <Contacts />}
            </AnimatePresence>
        </>
    )
}