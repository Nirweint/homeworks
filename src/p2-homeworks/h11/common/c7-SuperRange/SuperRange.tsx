import React from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@mui/material";

type SuperRangePropsType = {
    onChangeRange?: (value: number) => void
    value: number
    disabled?: boolean
    min?: number
    max?: number
    step?: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {value, onChangeRange,
        ...restProps
    }
) => {

    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number)
    }

    return (
        <>
            <Box sx={{width: 200}}>
                <Slider
                    className={s.slider}
                    value={value}
                    onChange={onChangeCallback}
                    {...restProps}
                />
            </Box>
        </>
    )
}

export default SuperRange
