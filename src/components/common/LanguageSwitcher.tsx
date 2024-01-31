import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Tooltip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const LanguageSwitcher = () => {
    const currentLanguage = i18next.language.toUpperCase();
    const language = currentLanguage === 'UK' ? 'UA' : currentLanguage;
    const { i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language)
    };

    return (
        <Dropdown >
            <DropdownTrigger>
                <Button
                    variant="ghost"
                    size="md"
                >
                    {language}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="en" onClick={() => changeLanguage('en')}>EN</DropdownItem>
                <DropdownItem key="ua" onClick={() => changeLanguage('uk')}>UA</DropdownItem>
                <DropdownItem key="ru" onClick={() => changeLanguage('ru')}>RU</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
