import { useState } from 'react'
import { useUserAuthContext } from './useUserAuthContext'

export interface Signup {
    singup: (name: string, email: string, password: string) => void
    loading: boolean
    error: string
}

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(false)
    const { dispatch } = useUserAuthContext()

    const signup = async (name: string, email: string, password: string) => {
        setError(null)
        setLoading(true)

        const resp = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        })
        const json = await resp.json()

        if (!resp.ok) {
            setLoading(false)
            setError(json)
        }

        if (resp.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'LOGIN', payload: json })
            setLoading(false)
        }
    }

    return { signup, loading, error }
}
