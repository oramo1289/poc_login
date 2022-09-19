import { LogAction, UserAuthState } from '../model/model'

export const userAuthReducer = (state: UserAuthState, action: LogAction) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }

        default:
            return state
    }
}
