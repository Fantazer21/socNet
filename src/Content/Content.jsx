import React from 'react'
import Post from './Post'
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/news";
import Music from "../Music/Music";


import styles from './Content.module.css'
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "../nav/Profile";

const Content = () => {
    const User1 = [
        {name: 'Ilya'},
        {age: 30}
    ]
    const User2 = [
        {name: 'Miki'},
        {age: 40}
    ]
    return (
            <div className={styles.content}>
                {/*<img src="https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg"*/}
                {/*     className={styles.photo_content} alt=""/>*/}
                {/*<Post message={` ${User1[0].name} ${User1[1].age}`}/>*/}
                {/*<Post message={` ${User2[0].name} ${User2[1].age}`}/>*/}
                {/*<Post message='How are you'/>*/}
                <Route path='/profile' component={Profile}/>
                <Route path='/messages' component={Dialogs}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
            </div>

    )
}
export default Content
