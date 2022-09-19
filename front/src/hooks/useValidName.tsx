import { useState } from 'react'

export const useValidName = () => {
    const [isValidName, setIsValidName] = useState<boolean>(false)
    const [errMesgName, setErrMesgName] = useState<string>('')

    const handlNameValidation = (value: string) => {
        const nameformat = /^[a-z_]+( [a-z_]+)*$/

        const validName = nameformat.test(value.trim().toLocaleLowerCase())
        let errMsg = ''
        if (!validName) {
            errMsg = 'please add a valid name '
        }

        setErrMesgName(errMsg)
        setIsValidName(validName)
    }

    return { isValidName, errMesgName, handlNameValidation }
}
