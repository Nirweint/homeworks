import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
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

    return (
        <div className={s.affairs}>
            {mappedAffairs}
            <button className={s.affairs__btn} onClick={() => {setPriorityHandler('all')}}>All</button>
            <button className={s.affairs__btn} onClick={() => {setPriorityHandler('high')}}>High</button>
            <button className={s.affairs__btn} onClick={() => {setPriorityHandler('middle')}}>Middle</button>
            <button className={s.affairs__btn} onClick={() => {setPriorityHandler('low')}}>Low</button>
        </div>
    )
}

export default Affairs
