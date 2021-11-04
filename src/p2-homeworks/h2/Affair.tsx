import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    const priorityStyle = s.affair__priority + " " + s[props.affair.priority]

    return (
        <div className={s.affair}>
            <span className={s.affair__name}>{props.affair.name}</span>
            <span className={priorityStyle}>{props.affair.priority}</span>
            <SuperButton className={s.affair__btn} onClick={deleteCallback}>x</SuperButton>
        </div>
    )
}

export default Affair
