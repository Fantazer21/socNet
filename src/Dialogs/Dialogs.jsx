import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props: any) => {
    const message1 = {
        Ilya: 'Hello i am Ilya',
        Sergey: 'Hello i am Sergey',
        Anna: 'Hello i am Anna',
        Archi: 'Hello i am Archi'
    }

    return (

        <div className={s.messages}>
            <div className={s.message}> {`${Object.keys(message1)[0]} : ${Object.values(message1)[0]}`} </div>
            <div className={s.message}>{`${Object.keys(message1)[1]} : ${Object.values(message1)[1]}`}</div>
            <div className={s.message}>{`${Object.keys(message1)[2]} : ${Object.values(message1)[2]}`} </div>
            <div className={s.message}> {`${Object.keys(message1)[3]} : ${Object.values(message1)[3]}`} </div>
        </div>

    )
}

export default Dialogs