import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: any): UserType[] => { // need to fix any
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