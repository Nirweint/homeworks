import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => {
        return (
            <option key={o + '-' + i} value={o} className={s.option}>{o}</option>
        )
    }) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalSuperSelectClassName = `${s.select} ${s.className ? s.className : ''}`

    return (
        <div className={s.selectWrapper}>
            <select onChange={onChangeCallback} {...restProps} className={finalSuperSelectClassName}>
                {mappedOptions}
            </select>
        </div>
    )
}

export default SuperSelect
