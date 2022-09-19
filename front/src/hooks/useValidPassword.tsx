import { useState } from 'react'

export const useValidPassword = () => {
    const [isValidPass, setIsValidPass] = useState<boolean>(false)
    const [errMsgPass, setErrMesgPass] = useState<string>('')

    const handlePasswordValidation = (value: string) => {
        const uppercaseRegExp = /(?=.*?[A-Z])/
        const lowercaseRegExp = /(?=.*?[a-z])/
        const digitsRegExp = /(?=.*?[0-9])/
        const specialCharRegExp = /(?=.*?[#?!@$%.^&*-])/
        const minLengthRegExp = /.{8,}/

        const uppercasePassword = uppercaseRegExp.test(value.trim())
        const lowercasePassword = lowercaseRegExp.test(value.trim())
        const digitsPassword = digitsRegExp.test(value.trim())
        const specialCharPassword = specialCharRegExp.test(value.trim())
        const minLengthPassword = minLengthRegExp.test(value.trim())

        let errMsgPass = ''
        if (!uppercasePassword) {
            errMsgPass = 'At least one Uppercase'
        } else if (!lowercasePassword) {
            errMsgPass = 'At least one Lowercase'
        } else if (!digitsPassword) {
            errMsgPass = 'At least one digit'
        } else if (!specialCharPassword) {
            errMsgPass = 'At least one Special Characters'
        } else if (!minLengthPassword) {
            errMsgPass = 'At least minumum 8 characters'
        } else {
            errMsgPass = ''
        }

        setErrMesgPass(errMsgPass)
        setIsValidPass(errMsgPass.length === 0)
    }

    return { isValidPass, errMsgPass, handlePasswordValidation }
}
