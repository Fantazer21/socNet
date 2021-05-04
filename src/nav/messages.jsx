import React from "react";
import s from './profile.module.css'
import stateData from "../redux/state";

const Person = (props) => {
    return (
        <div className={s.message_title}>
            <div>  {props.title} </div>
            <div>  {props.state} </div>
        </div>
    )
}

const Profile_photo = (props) => {
    return (
        <div>
            <img className={s.Profile_photo} src={props.path}/>
        </div>
    )
}


const MessageBlock1 = (props) => {

    return (




        <div className={s.Profile_full_message_main}>
            {
                stateData.map( el => { return (
                    <div className={s.Profile_full_message}>
                        <div className={s.block_photo}>
                            <Profile_photo
                                path={el.pathImage}
                            />
                        </div>
                        <Person
                            title="Message 1"
                            state={` Hello i am ${el.name} `}
                        />
                    </div>



                )
                })
            }

        </div>
    )
}


const Messages = () => {
    return (
        <div>
            <MessageBlock1/>

        </div>


    )
}
export default Messages