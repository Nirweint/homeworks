import React, {ChangeEvent, KeyboardEvent} from 'react'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserOnEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, addUserOnEnter, error, totalUsers} // деструктуризация пропсов
) => {

    return (
        <div className={s.greeting}>
            <div className={s.inputWrapper}>
                <SuperInputText
                    error={error}
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={addUserOnEnter}
                />
                <SuperButton className={s.btn} onClick={addUser}>add</SuperButton>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
