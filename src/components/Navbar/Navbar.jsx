import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={`${s.item} ${s.active} ${s.animation1}`}> <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
    <div className={`${s.item} ${s.active} ${s.animation2}`}> <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
    <div className={`${s.item} ${s.active} ${s.animation1}`}> <NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
    <div className={`${s.item} ${s.active} ${s.animation2}`}> <NavLink to="/musik" activeClassName={s.active}>Music</NavLink></div>
    <div className={`${s.item} ${s.active} ${s.animation1}`}> <NavLink to="/setting" activeClassName={s.active}>Settings</NavLink></div>
    {/* <div className={`${s.item} ${s.active}`}> <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink></div> */}
  </nav>
}

export default Navbar;