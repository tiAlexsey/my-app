import React from "react";
import s from './Header.module.css';
import logo from '../../logo.png'
import store from "redux/store-redux";

let auth = () => {
    store.getState().auth.isAuth = !store.getState().auth.isAuth;
    let message;
    if (store.getState().auth.isAuth) message = 'Вы вошли в систему';
    else message = 'Вы вышли из системы';
    alert(message);
}

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.contain}>
                <div>
                    <img src={logo} />
                </div>
                <div></div>
                <div className={s.login}>
                    <button className={s.VisibleTrue} onClick={auth}>Login in/logout</button>
                </div>
            </div>
        </header>
    )
}

export default Header;