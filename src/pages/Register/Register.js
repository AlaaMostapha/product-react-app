import React from 'react'
import Container from '@material-ui/core/Container';
import CreateButton from '../../components/Btn/Btn';
import FormikControl from '../Form/FormikControl';
import { Formik , Form } from 'formik';
import * as Yup from 'yup';
function Register() {
    const initialValues={
        firstName:'',
        lastName:'',
        email:'',
        genderSelect:'',
        verifyRadio:'',
        favouriteChecbox:[],
        birthday:null,
        password:'',
        retypePassword:''
    }
    const ValidationSchema = Yup.object({
        firstName:Yup.string().required('First Name is required'),
        lastName:Yup.string().required('Last Name is required'),
        email:Yup.string().required('Email is required').email('Email format is wrong'),
        genderSelect:Yup.string().required('Gender is required'),
        verifyRadio:Yup.string().required('Verfication method is required'),
        favouriteChecbox:Yup.array(),
        birthday:Yup.date().required('Date is required').nullable(),
        password:Yup.string().required('Password is required')
        .min(6,'password must be 6 chars at least')
        // .matches()//regex
        ,retypePassword:Yup.string()
        .oneOf([Yup.ref('password'),''],'password must be matched')
    })
    const onSubmit=(UserValues)=>{
        console.log('user values',UserValues)
    }
    const genderOtions=[
        {key:'Select Your Gender',value:''},
        {key:'Male',value:'male'},
        {key:'Male',value:'male'}
    ]
    const verifyOtions=[
        {key:'Email',value:'email'},
        {key:'Phone Number',value:'phoneNumber'}
    ]
    const favouriteOtions=[
        {key:'Cars',value:'cars'},
        {key:'Clothes',value:'clothes'},
        {key:'Beauty',value:'beauty'}
    ]
    return (
        <Container maxWidth="lg" style={{display:'flex',margin:'50px',justifyContent:'center'}}>
            {/* {console.log(users)} */}
            <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={onSubmit}
            >
                {formik=>(
                    <Form> 
                        <FormikControl
                            control="input"
                            type="text"
                            name="firstName"
                            label="First Name:"
                            autoComplete="off"
                        />
                        <FormikControl
                            control="input"
                            type="text"
                            name="lastName"
                            label="Last Name:"
                            autoComplete="off"
                        />
                        <FormikControl
                            control="input"
                            type="email"
                            name="email"
                            label="Email:"
                            autoComplete="off"
                        />
                        <FormikControl
                            control="select"
                            name="genderSelect"
                            label="Choose your Gender:"
                            autoComplete="off"
                            options={genderOtions}
                        />
                        <FormikControl
                            control="radio"
                            name="verifyRadio"
                            label="Choose your Verification Method:"
                            autoComplete="off"
                            options={verifyOtions}
                        />
                        <FormikControl
                            control="date"
                            name="birthday"
                            label="Birthday:"
                            autoComplete="off"
                        />
                        <FormikControl
                            control="checkbox"
                            name="favouriteChecbox"
                            label="Choose your favourites:"
                            autoComplete="off"
                            options={favouriteOtions}
                        />
                        <FormikControl
                            control="input"
                            type="password"
                            name="password"
                            label="Password:"/>
                            <FormikControl
                            control="input"
                            type="password"
                            name="retypePassword"
                            label="Retype Password:"/>
                        <div style={{textAlign:"center"}}>
                            <CreateButton color="primary" text="Register" type="submit" disabled={!( formik.isValid)}/>
                        </div>
                    </Form> 
                )}
            </Formik>
         
            </Container>
    )
}

export default Register
