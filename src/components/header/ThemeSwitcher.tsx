import './index.css';
import { useState, useEffect } from 'react';

const ThemeSwitcher = ({ switcherStyles }: { switcherStyles?: string }) => {
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
        <input
            type="checkbox"
            className={`theme-checkbox + ${switcherStyles}`}
            checked={!darkMode}
            onChange={toggleDarkMode}
        />
    );
};

export default ThemeSwitcher;
