const initState = {
    themeId: 1,
}
type InitStateType = {
    themeId: number
}

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({type: 'SET_THEME_ID', id}) // fix any

type ActionType = {
    id: number,
    type: 'SET_THEME_ID'
}