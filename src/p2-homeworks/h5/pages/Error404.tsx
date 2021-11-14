import React from 'react'
import s from './Error404.module.css'
import {NavLink} from "react-router-dom";

export function Error404() {
    return (
        <div className={s.error}>
            <div className={s.num}>404</div>
            <div className={s.title}>Page not found!</div>
            <div className={s.kitty}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <NavLink to={'/'}>Return to pre-junior</NavLink>
        </div>
    )
}
