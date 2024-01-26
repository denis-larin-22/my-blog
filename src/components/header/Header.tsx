import './index.css';
import Avatar from '../common/Avatar';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { Button, Link } from '@nextui-org/react';
import AboutMe from '../common/AboutMe';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Contacts from '../common/Contacts';
import BurgerBtn from './BurgerBtn';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Header = () => {
    // Translation
    const { t } = useTranslation()

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
                    {t('header:tMyBlog')}
                </div>
                <nav className="text-black-light dark:text-white-matte hidden lg:flex gap-10">
                    <Button as={Link} href='#posts' variant='light'>
                        {t('header:tBlog')}
                    </Button>
                    <Button
                        variant='light'
                        onClick={() => vissibleToggler('aboutMe')}
                    >
                        {t('header:tAboutMe')}
                    </Button>
                    <Button as={Link} href='https://denis-larin-22.github.io/my-portfolio/' target='blanc' variant='light'>
                        {t('header:tPortfolio')}
                    </Button>
                    <Button
                        name='contacts'
                        variant='light'
                        onClick={() => vissibleToggler('contacts')}
                    >
                        {t('header:tContacts')}
                    </Button>
                </nav>
                <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeSwitcher switcherStyles='hidden lg:inline' />
                    <BurgerBtn styles='block lg:hidden' togglerMenuVissibleState={() => setIsOpenNavbar(!isOpenNavbar)} />
                </div>
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
                            <Button as={Link} href='#posts' variant='light'>
                                {t('header:tBlog')}
                            </Button>
                            <Button
                                variant='light'
                                onClick={() => vissibleToggler('aboutMe')}
                            >
                                {t('header:tAboutMe')}
                            </Button>
                            <Button as={Link} href='https://denis-larin-22.github.io/my-portfolio/' target='blanc' variant='light'>
                                {t('header:tPortfolio')}
                            </Button>
                            <Button
                                name='contacts'
                                variant='light'
                                onClick={() => vissibleToggler('contacts')}
                            >
                                {t('header:tContacts')}
                            </Button>
                        </nav>

                        <ThemeSwitcher />
                    </motion.div>}
            </AnimatePresence>

            <AnimatePresence>
                {isAboutMeVissible && <AboutMe />}
                {isContactsVissible && <Contacts />}
            </AnimatePresence>
        </>
    )
}