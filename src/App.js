import React from "react";


import './App.css';
import Header from './Header/Header'
import Navbar from './nav/nav'
import Content from "./Content/Content";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import Profile from "./nav/Profile";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Content/>

            </div>
        </BrowserRouter>


    )
}


export default App;
