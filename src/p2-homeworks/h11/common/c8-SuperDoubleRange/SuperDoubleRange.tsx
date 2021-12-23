import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    disabled?: boolean
    min?: number
    max?: number
    step?: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки

    const isDisableSwap = value && value[0] <= value[1]
    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        if (isDisableSwap) {
            onChangeRange && onChangeRange(newValue as [number, number])
        }
    }


    return (
        <>
            <Box sx={{ width: 200 }}>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    disableSwap={!!isDisableSwap}
                    {...restProps}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
