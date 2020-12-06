import "./Order.scss";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
// import TextField from '@material-ui/core/TextField';

export default function OrderNow() {
  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Adress is required"),
    phoneNumber: Yup.number().required("phonenumber is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });
  const initialValues = {
    address: "",
    phoneNumber: "",
    email: "",
  };
  function submitFrom() {}
  return (
    <Container maxWidth="lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitFrom}
        render={({ errors, status, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">Address </label>
              <Field
                name="firstName"
                type="text"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number </label>
              <Field
                name="phoneNumber"
                type="text"
                className={
                  "form-control" +
                  (errors.phoneNumber && touched.phoneNumber
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Submit
              </button>
            </div>
          </Form>
        )}
      />
    </Container>
  );
}
