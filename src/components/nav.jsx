import React from "react";
import Header from "./Header";
import './nav.css'

 export const Navbar = () => {
    return (
        <nav className='nav'>
            <div>profile</div>
            <div>messages</div>
            <div>news</div>
            <div>music</div>
        </nav>
    )
}
export default Navbar
