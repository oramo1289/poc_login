export enum UserStates {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface UserAuthState {
    user: User | null
}

export interface User {
    name: string
    email: string
    token: string
}

export interface LogAction {
    type: UserStates
    payload: User | null
}
