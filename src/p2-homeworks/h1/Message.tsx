import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.cloud}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messageText}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
