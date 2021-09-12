import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div>
                <img src='https://cdn.down10.software/img/icons/vdraw.png'/>
            </div>
        </header>
    )
}

export default Header;