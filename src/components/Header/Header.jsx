import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={`${s.header} ${s.image}`}>
        <img src='https://www.rosfirm.ru/goods/images/51/51.5774550/images/logo.jpg' />
        <div className={s.loginBlock}>
            {props.isAuth
             ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
              : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;