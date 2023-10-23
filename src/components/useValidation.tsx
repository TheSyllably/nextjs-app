"use client"
import { useGlobalContext } from "@/app/Context/store"
import React, {useEffect, useState} from "react";


const useValidation = (value:any, validations:any) => {
  


    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [minValueError, setMinValueError] = useState(false);
    const [maxValueError, setMaxValueError] = useState(false);
    const [isNumberError, setIsNumberError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
   

    useEffect(() => {
    for (const validation in validations) {
        switch (validation) {
            case 'minLength':
               value.length < validations[validation] ?  setMinLengthError(true) : setMinLengthError(false);
            break;
            case 'maxLength':
                value.length > validations[validation] ?  setMaxLengthError(true) : setMaxLengthError(false);  
            break;

            case 'isEmpty':
                 value ? setEmpty(false) : setEmpty(true)
            break;

            case 'minValue':
                value < validations[validation] ? setMinValueError(true) : setMinValueError(false) 
                break;
               
            case 'maxValue':
                value > validations[validation] ? setMaxValueError(true) : setMaxValueError(false) 
                break;
                
            case 'isNumber':
                const reg = /^\d+$/;
                reg.test(value) ? setIsNumberError(false) : setIsNumberError(true)
                break;
        }
    }
    }, [value])

    useEffect(() => {
       if( isEmpty || maxLengthError || minLengthError || minValueError || maxValueError || isNumberError ) {
        setInputValid(false)
     } else { setInputValid(true) }

    }, [isEmpty, maxLengthError, minLengthError, minValueError, maxValueError, isNumberError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        minValueError,
        maxValueError,
        isNumberError,
        inputValid
    }
}







export default useValidation;