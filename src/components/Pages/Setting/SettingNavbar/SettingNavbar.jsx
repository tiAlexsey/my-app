import { NavLink } from "react-router-dom";
import s from "./SettingNavbar.module.css";
import React from "react";

const settingNavbar = (props) => {
    return (
        <div>
            <NavLink to="/setting/basic">
                <div className={s.menu}>Основные</div>
            </NavLink>
            <NavLink to={'/setting/security'}>
                <div className={s.menu}>Безопасность</div>
            </NavLink>
            <NavLink to={'/setting/notification'}>
                <div className={s.menu}>Уведомления</div>
            </NavLink>
        </div>
    )
}

export default settingNavbar;