import { useState, SyntheticEvent, useEffect, useCallback } from 'react'
import FormControl from '../components/FormControl'
import { useLogin } from '../hooks/useLogin'
import { useValidEmail } from '../hooks/useValidEmail'
import { useValidPassword } from '../hooks/useValidPassword'

import './Login.css'

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { login, loading, error } = useLogin()
    const { isValidPass, errMsgPass, handlePasswordValidation } =
        useValidPassword()
    const { isValidEmail, errMesgEmail, handlEmailValidation } = useValidEmail()

    useEffect(() => {
        email !== '' && handlEmailValidation(email)
        password !== '' && handlePasswordValidation(password)
    }, [email, password, handlEmailValidation, handlePasswordValidation])

    const mempozedHandleEmailChange = useCallback((value: string) => {
        setEmail(value)
    }, [])
    const memoizedHandlePasswordChange = useCallback((value: string) => {
        setPassword(value)
    }, [])

    const handleSubmmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (isValidPass && isValidEmail) {
        }
        await login(email, password)
    }
    return (
        <div>
            <form action="" className="login" onSubmit={handleSubmmit}>
                <h3>Login</h3>

                <FormControl
                    lableTitle={'Email'}
                    value={email}
                    onChange={mempozedHandleEmailChange}
                    errMessage={errMesgEmail}
                />
                <FormControl
                    lableTitle={'Password'}
                    value={password}
                    onChange={memoizedHandlePasswordChange}
                    errMessage={errMsgPass}
                />

                <button disabled={loading}>Log in</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Login
