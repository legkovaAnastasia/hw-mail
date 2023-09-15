import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state].sort((a, b) => {
                   return  a.name.localeCompare(b.name)
                })
            } else if (action.payload==='down') {
                return [...state].sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            return state
        }
        case 'check': {
           return  action.payload===18?state.filter(u=>u.age>=18): state
        }
        default:
            return state
    }
}

