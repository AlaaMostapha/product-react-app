import React from "react";
import Container from "@material-ui/core/Container";
import CreateButton from "../../components/Btn/Btn";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Form/FormikControl";

function OrderNow() {
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
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  return (
    <Container
      maxWidth="lg"
      style={{ display: "flex", margin: "50px", justifyContent: "center" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              label="Address"
              name="address"
              type="text"
            />
            <FormikControl
              control="input"
              label="Phone Number"
              name="phoneNumber"
              type="text"
            />
            <FormikControl
              control="input"
              label="Email"
              name="email"
              type="email"
            />
            <CreateButton
              type="submit"
              text="submit"
              disabled={!(formik.dirty && formik.isValid)}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default OrderNow;
