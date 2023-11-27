import React, { FocusEventHandler } from 'react';
import styles from 'src/components/formInput/formInput.module.css'
import styled from 'styled-components'

const FormInp = styled.div`
display: flex;
flex-direction: column;
width: 200px;
`

const InputVal = styled.input`
padding-left: 10px;
font-size: 12px;
color: gray;
}`


const SpanName = styled.span`
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;

    ${InputVal}:invalid + & {
        display: block;
    }

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
            <InputVal
                {...inputProps}
                onChange={onChange}
                //    onBlur={handleFocus}
                //    focused={focused.toString}
                required />
            <SpanName>  {errorMessage} </SpanName>
        </FormInp>
    )
}

export default FormInput;