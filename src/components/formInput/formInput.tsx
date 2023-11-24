import React, { FocusEventHandler } from 'react';
import styles from 'src/components/formInput/formInput.module.css'
import styled from 'styled-components'

const FormInp = styled.div`
display: flex;
flex-direction: column;
width: 200px;
`

type InputProps = {

    label: string;
    id: number;
    errorMessage: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    required: boolean;
    focused: string;
}

const FormInput = (props: InputProps) => {



    const { label, onChange, id, errorMessage, ...inputProps } = props;

    // const handleFocus = (e:React.FormEvent<HTMLFormElement>) => {
    //  setFocused(true)
    // }
    return (
        <FormInp className="formInput">
            <label> {label}</label>
            <input
                className={styles.inputValidation}
                {...inputProps}
                onChange={onChange}
                //    onBlur={handleFocus}
                //    focused={focused.toString}
                required />
            <span className={styles.spanName}> {errorMessage} </span>
        </FormInp>
    )
}

export default FormInput;