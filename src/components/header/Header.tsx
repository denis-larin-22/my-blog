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
import { _createAnimation } from '../../_utils/_createAnimation';

export const Header = () => {
    // Translation
    const { t } = useTranslation();
    // Animations
    const [initAvatar, animateAvatar, transitionAvatar] = _createAnimation({ y: "40%", opacity: 0, duration: 0.5, delay: 0.4 });
    const [initNav, animateNav, transitionNav] = _createAnimation({ y: "40%", opacity: 0, duration: 0.5, delay: 0.7 });
    const [initSwitchers, animateSwitchers, transitionSwitchers] = _createAnimation({ y: "40%", opacity: 0, duration: 0.5, delay: 1 });
    const [initNavbar, animateNavbar, transitionNavbar] = _createAnimation({ y: "-20%", opacity: 0 });

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
                <motion.div
                    initial={initAvatar}
                    animate={animateAvatar}
                    transition={transitionAvatar}
                    className='cursor-pointer text-xl font-semibold flex items-center gap-2' onClick={() => vissibleToggler('aboutMe')}
                >
                    <Avatar size='large' />
                    {t('header:tMyBlog')}
                </motion.div>
                <motion.nav
                    initial={initNav}
                    animate={animateNav}
                    transition={transitionNav}
                    className="text-black-light dark:text-white-matte hidden lg:flex gap-10"
                >
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
                </motion.nav>
                <motion.div
                    initial={initSwitchers}
                    animate={animateSwitchers}
                    transition={transitionSwitchers}
                    className="flex items-center gap-2"
                >
                    <LanguageSwitcher />
                    <ThemeSwitcher switcherStyles='hidden lg:inline' />
                    <BurgerBtn styles='block lg:hidden' togglerMenuVissibleState={() => setIsOpenNavbar(!isOpenNavbar)} />
                </motion.div>
            </header>

            <AnimatePresence>
                {isOpenNavbar &&
                    <motion.div
                        className="relative container flex flex-col lg:hidden bg-gray-light dark:bg-dark-light pb-4"
                        initial={initNavbar}
                        animate={animateNavbar}
                        exit={initNavbar}
                        transition={{ ...transitionNavbar, type: "spring", stiffness: 200, damping: 25 }}
                    >
                        <ThemeSwitcher switcherStyles='absolute top-5 z-50 self-end' />
                        <nav className="flex flex-col">
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
                    </motion.div>}
            </AnimatePresence>

            <AnimatePresence>
                {isAboutMeVissible && <AboutMe />}
                {isContactsVissible && <Contacts />}
            </AnimatePresence>
        </>
    )
}