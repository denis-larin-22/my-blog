interface IProps {
    styles?: string,
    togglerMenuVissibleState: () => void;
}

const BurgerBtn = ({ styles, togglerMenuVissibleState }: IProps) => {
    return (
        <div
            className={`menu-icon + ${styles}`}
            onClick={togglerMenuVissibleState}
        >
            <input className="menu-icon__cheeckbox" type="checkbox" />
            <div>
                <span className="dark:bg-white-matte"></span>
                <span className="dark:bg-white-matte"></span>
            </div>
        </div>
    )
}

export default BurgerBtn;