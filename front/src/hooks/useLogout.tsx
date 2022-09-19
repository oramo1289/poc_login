import { useUserAuthContext } from './useUserAuthContext'

export const useLogout = () => {
    const { dispatch } = useUserAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}
