import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/FilmPage/0'} activeClassName={s.activeLink}>О фильме</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/search'} activeClassName={s.activeLink}>Поиск фильма</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/viewed'} activeClassName={s.activeLink}>Просмотренное</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/toBeSeen'} activeClassName={s.activeLink}>Предстоит посмотреть</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/setting'} activeClassName={s.activeLink}>Настройки</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;