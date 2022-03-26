import React from "react";
import s from './Header.module.css';
import logo from '../../logo.png'
import { connect } from "react-redux";
import { entry } from "redux/auth-reducer";


const Header = (props) => {

    let auth = () => {
        props.entry();
        let message;
        if (!props.isAuth) message = 'Вы вошли в систему';
        else message = 'Вы вышли из системы';
        alert(message);
    }

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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { entry })(Header);