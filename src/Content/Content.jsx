import React from 'react'
import Post from './Post'
import Dialogs from "../Dialogs/Dialogs";

import styles from './Content.module.css'

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
            <img src="https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg"
                 className={styles.photo_content} alt=""/>
            <Post message={` ${User1[0].name} ${User1[1].age}`}/>
            <Post message={` ${User2[0].name} ${User2[1].age}`}/>
            <Post message='How are you'/>
            <div>
                <Dialogs />
            </div>
        </div>
    )
}
export default Content
