import { useState } from 'react'

export const useValidEmail = () => {
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false)
    const [errMesgEmail, setErrMesgEmail] = useState<string>('')

    const handlEmailValidation = (value: string) => {
        const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/

        const validMail = mailformat.test(value.trim())

        let errMsg = ''
        if (!validMail) {
            errMsg = 'please add and email with this format "name@example.com" '
        }

        setErrMesgEmail(errMsg)
        setIsValidEmail(validMail)
    }

    return { isValidEmail, errMesgEmail, handlEmailValidation }
}
