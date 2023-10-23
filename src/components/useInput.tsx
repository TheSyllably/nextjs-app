import useValidation from "./useValidation"
import React, {useState} from "react"


const useInput = (initialValue: any, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isBad, setBad] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e:any) => {
         setValue(e.target.value)
    
    }

    const onBlur = (e:any) => {
        setBad(true)

    }

    return {
        value,
        onChange,
        onBlur,
        isBad,
        ...valid
    }
}

export default useInput;