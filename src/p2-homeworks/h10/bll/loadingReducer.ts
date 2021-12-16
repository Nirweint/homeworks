
export type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading }
        }
        default: return state
    }
}


// type loadingACType = ReturnType<typeof loadingAC>
type loadingACType = {
    type: "CHANGE_LOADING"
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): loadingACType => {
    return {
        type: "CHANGE_LOADING",
        isLoading,
    } as const
} // fix any