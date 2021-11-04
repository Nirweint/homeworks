import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const setPriorityHandler = (value: FilterType) => {
        props.setFilter(value)
    }
    const activePriorityBtnStyle = (el: FilterType) => {
        return props.filter === el ? `${s.active} ${s.affairs__btn}` : `${s.affairs__btn}`;
    }

    return (
        <div className={s.affairs}>
            {mappedAffairs}
            <div className={s.affairs__buttons}>
                <SuperButton className={activePriorityBtnStyle("all")} onClick={() => {
                    setPriorityHandler('all')
                }}>All</SuperButton>
                <SuperButton className={activePriorityBtnStyle("high")} onClick={() => {
                    setPriorityHandler('high')
                }}>High</SuperButton>
                <SuperButton className={activePriorityBtnStyle("middle")} onClick={() => {
                    setPriorityHandler('middle')
                }}>Middle</SuperButton>
                <SuperButton className={activePriorityBtnStyle("low")} onClick={() => {
                    setPriorityHandler('low')
                }}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
