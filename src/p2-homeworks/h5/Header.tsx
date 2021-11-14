import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesComponent";
import s from './Header.module.css';


export function Header() {

    const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.active : "";

    return (
        <div className={s.nav}>
            <NavLink to={PATH.PRE_JUNIOR} className={setActive}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={setActive}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={setActive}>JuniorPlus</NavLink>
            <div className={s.arrow}></div>
        </div>
    )
}
