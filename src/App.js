import React from "react";


import './App.css';
import Header from './Header/Header'
import Navbar from './nav/nav'
import Content from "./Content/Content";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Content />
        </div>
    )
}


export default App;
