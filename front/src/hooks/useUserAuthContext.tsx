import { useContext } from 'react'
import { UserAuthContext } from '../context/UserAuthContext'

export const useUserAuthContext = () => {
    const context = useContext(UserAuthContext)
    //just in case something fails
    if (!context) {
        throw Error(
            'UserAuthContext must be used inside UserAuthContextProvider'
        )
    }
    return context
}
