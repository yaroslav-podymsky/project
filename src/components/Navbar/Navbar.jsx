import React from 'react';
import s from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div className={`${s.item} ${s.active}`}> <a href="/profile">Profile</a></div>
    <div className={`${s.item} ${s.active}`}> <a href="/dialogs">Messages</a></div>
    <div className={`${s.item} ${s.active}`}> <a>News</a></div>
    <div className={`${s.item} ${s.active}`}> <a>Music</a></div>
    <div className={`${s.item} ${s.active}`}> <a>Settings</a></div>
  </nav>
}

export default Navbar;