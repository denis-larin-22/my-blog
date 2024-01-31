import { Tooltip } from '@nextui-org/react';
import './styles/index.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ThemeSwitcher = ({ switcherStyles }: { switcherStyles?: string }) => {
    const { t } = useTranslation()

    const getInitialDarkMode = (): boolean => {
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    };

    const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <Tooltip content={t("tSwitchTheme")}>
            <input
                type="checkbox"
                className={`theme-checkbox + ${switcherStyles}`}
                checked={!darkMode}
                onChange={toggleDarkMode}
            />
        </Tooltip>
    );
};

export default ThemeSwitcher;
