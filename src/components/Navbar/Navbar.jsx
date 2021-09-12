import React from "react";
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}  ${s.active}`}> О фильме</div>
            <div className={s.item}>Главная</div>
            <div className={s.item}>Поиск фильма</div>
            <div className={s.item}>Просмотренное</div>
            <div className={s.item}>Предстоит посмотреть</div>
            <div className={s.item}>Настройки</div>
        </nav>
    )
}

export default Navbar;