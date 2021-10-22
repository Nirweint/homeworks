import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div>
            <span className={s.affair__name}>{props.affair.name}</span>
            <span className={s.affair__priority}>{props.affair.priority}</span>
            <button className={s.affair__btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
