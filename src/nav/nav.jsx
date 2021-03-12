import React from "react";
import Header from "../Header/Header";
import Profile from "./Profile";
import s from './nav.module.css'
import Messages from "./Messages";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href='/Profile'>Profile</a></div>
            <div className={s.item}><a href='/Messages'>Messages</a></div>
            <div className={s.item}><a href='/News'>news</a></div>
            <div className={s.item}><a href='/Music'>music</a></div>
        </nav>
    )
}
export default Navbar
