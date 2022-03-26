import { withAuthRedirect } from "hoc/withAuthRedirect";
import React from "react";
import { compose } from "redux";
import s from './Setting.module.css'
import SettingNavbar from './SettingNavbar/SettingNavbar'


class Setting extends React.Component {
    render() {
        return <div className={s.setting}>
        <SettingNavbar/>
        <div className={s.content}>
            <div>Изменить ник</div>
            <div>Изменить логин</div>
            <div>Изменить пароль</div>
            <div>Включить уведомления</div>
        </div>
    </div>
    }
}

export default compose(
    withAuthRedirect
)(Setting);