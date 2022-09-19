import { useState } from 'react'

export const useComparePasswords = () => {
    const [areValidPasswords, setAreValidPasswords] = useState<boolean>(false)
    const [errMesgPasswords, setErrMesgPasswords] = useState<string>('')

    const handlComparePasswords = (pass1: string, pass2: string) => {
        const validName = pass1 === pass2

        let errMsg = ''
        if (!validName) {
            errMsg = "passwrods don't match"
        }

        setErrMesgPasswords(errMsg)
        setAreValidPasswords(validName)
    }

    return { areValidPasswords, errMesgPasswords, handlComparePasswords }
}
