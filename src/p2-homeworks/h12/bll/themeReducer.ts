export type themeStateType = {
    theme: string
}
type ThemeActionsType = changeThemeCType

const initState: themeStateType = {
    theme: "some"
};

export const themeReducer = (state = initState, action: ThemeActionsType): themeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};


export type changeThemeCType = {
    type: "CHANGE-THEME"
    theme: string
}
export const changeThemeC = (theme: string): changeThemeCType => {
    return {
        type: "CHANGE-THEME",
        theme,
    } as const
}