import {UserType} from "../HW8";


type homeWorkReducerActionsType = sortUpACType | sortDownACType | checkAgeACType

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const stateCopy = [...state]
            if (action.payload === 'up') {
                return stateCopy.sort((a, b) => a.name <= b.name ? -1 : 1)
            }
            if (action.payload === 'down') {
                return stateCopy.sort((a, b) => a.name <= b.name ? 1 : -1)
            }
            return state
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}

type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = (payload: string) => {
    return {
        type: 'sort',
        payload,
    } as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = (payload: string) => {
    return {
        type: 'sort',
        payload,
    } as const
}

type checkAgeACType = ReturnType<typeof checkAgeAC>
export const checkAgeAC = (payload: number) => {
    return {
        type: 'check',
        payload,
    } as const
}