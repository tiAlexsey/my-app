import React from "react";
import s from './Setting.module.css'
import SettingNavbar from './SettingNavbar/SettingNavbar'

const Setting = (props) => {
    return (
        <div className={s.setting}>
            <SettingNavbar/>
            <div className={s.content}>
                <div>Изменить ник</div>
                <div>Изменить логин</div>
                <div>Изменить пароль</div>
                <div>Включить уведомления</div>
            </div>
        </div>
    )
}

export default Setting;