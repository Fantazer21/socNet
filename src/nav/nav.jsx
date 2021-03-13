import React from "react";
import Header from "../Header/Header";
import Profile from "./Profile";
import s from './nav.module.css'
import Messages from "./Messages";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/Profile">
                Profile
            </NavLink>
            <NavLink to="/Messages">
                Messages
            </NavLink>
            <a href="/News">
                News
            </a>
            <a href="/Music">
                Music
            </a>
        </nav>
    )
}
export default Navbar
