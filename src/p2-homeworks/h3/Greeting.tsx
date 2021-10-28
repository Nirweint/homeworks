import React, {ChangeEvent, KeyboardEvent} from 'react'
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
    const inputClass = error ? `${s.error} ${s.input}` : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div className={s.inputWrapper}>
                <input
                    className={inputClass}
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={addUserOnEnter}
                />
                <button className={s.btn} onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
