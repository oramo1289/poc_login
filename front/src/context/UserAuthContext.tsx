import { useReducer, createContext, useEffect, Dispatch } from 'react'
import { UserAuthState, UserStates } from '../model/model'
import { userAuthReducer } from '../reducer/UserAuthReducer'

export interface UserAuthContextProviderProps {
    children: React.ReactNode
}

const initialState = {
    user: null,
}

export const UserAuthContext = createContext<{
    state: UserAuthState
    dispatch: Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null,
})

export const UserAuthContextProvider: React.FC<
    UserAuthContextProviderProps
> = ({ children }) => {
    const [state, dispatch] = useReducer(userAuthReducer, {
        user: null,
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')!)

        if (user) {
            dispatch({ type: UserStates.LOGIN, payload: user })
        }
    }, [])

    return (
        <UserAuthContext.Provider value={{ state: { ...state }, dispatch }}>
            {children}
        </UserAuthContext.Provider>
    )
}
