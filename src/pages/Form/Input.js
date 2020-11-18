import React from 'react';
import {Field , ErrorMessage } from 'formik';
import textError from './TextError';

function Input(props) {
    const {label,name,...rest}= props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={textError}/>
        </div>
    )
}

export default Input
