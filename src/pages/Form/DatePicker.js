import React from 'react'
import {Field , ErrorMessage } from 'formik';
// import textError from './TextError';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {
    const {label,name,...rest}=props 
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {({form,field})=>{
                    const {setFieldValue}=form;
                    const {value}=field
                    return(
                    <DateView
                        id={name}
                        {...field}
                        {...rest}
                        selected={value}
                        onChange={(val)=>setFieldValue(name,val)}
                    />
                    )
                }}
            </Field>
            <ErrorMessage name={name}>
                {(errorMsg)=>(
                    <div className="error">{errorMsg}</div>
                )}
            </ErrorMessage>
        </div>
    )
}

export default DatePicker
