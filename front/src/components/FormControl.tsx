import { ChangeEvent, Fragment, memo } from 'react'

export interface FormControlProps {
    lableTitle: string
    value: string
    onChange: (value: string) => void
    errMessage: string
}

const FormControl: React.FC<FormControlProps> = ({
    lableTitle,
    value,
    onChange,
    errMessage,
}): JSX.Element => {
    return (
        <Fragment>
            <label htmlFor="">{lableTitle}:</label>
            <input
                type="text"
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onChange(e.target.value)
                }
            />
            {errMessage !== '' && <div className="error">{errMessage}</div>}
        </Fragment>
    )
}

export default memo(FormControl)
