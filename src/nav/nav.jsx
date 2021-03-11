import React from "react";
import Header from "../Header/Header";
import styles from './nav.module.css'

 export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>profile</div>
            <div>messages</div>
            <div>news</div>
            <div>music</div>
        </nav>
    )
}
export default Navbar
