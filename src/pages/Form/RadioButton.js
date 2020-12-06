import React from 'react';
import {Field , ErrorMessage } from 'formik';
import textError from './TextError';

function RadioButton(props) {
    const {label,name,options,...rest}= props
    return (
        <div>
           <label htmlFor={name}>{label}</label>
           <Field name={name}{...rest}>
            {
                ({field})=>{
                    return options.map(option=>{
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                type='radio'
                                {...field} //should be there!
                                id={option.value}
                                value={option.value}
                                checked={field.value===option.value}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }
            }
           </Field>
            <ErrorMessage name={name} component={textError}/>
        </div>
    )
}

export default RadioButton
// <input type="radio" id="male" name="gender" value="male">
//<label for="male">Male</label> 