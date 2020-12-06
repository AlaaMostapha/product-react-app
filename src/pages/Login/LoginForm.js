import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import CreateButton from "../../components/Btn/Btn";
import FormikControl from "../Form/FormikControl";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { useDispatch , useSelector} from "react-redux";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/login";
import history from "../../Route/history";

import { Link } from "react-router-dom";

function LoginForm(props) {
  useEffect(() => {
    //get users from Api
    props.requestUsersFromApi();
  }, []);
  const initialValues = {
    email: "",
    password: "",
  };
  const ValidationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email format is wrong"),
    password: Yup.string().required("Password is required"),
  });
  const onSubmit = (UserValues, submitProps) => {
    // props.checkLoginUser(UserValues)
    //check if user is in api or not  //if redirect to products
    let found = props.users.find((user) => user.email === UserValues.email); //check for this user in api array
    if (found) {
      history.push("/products");
    }
  };
  return (
    <Container
      maxWidth="lg"
      style={{ display: "flex", margin: "50px", justifyContent: "center" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              name="email"
              label="Email:"
              autoComplete="off"
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              label="Password:"
            />
            <div style={{ textAlign: "center" }}>
              <CreateButton
                color="primary"
                text="Login"
                type="submit"
                disabled={!(formik.dirty && formik.isValid)}
              />
            </div>
            <div>
              If you didn't have an account<Link to="/register">Register</Link>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    requestUsersFromApi: () => dispatch(actions.requestUsersFromApi()),
    checkLoginUser: (user) => dispatch(actions.checkLoginUser(user)),
  };
}
function mapStateToProps(state) {
  return {
    users: state.loginReducer.users,
    check: state.loginReducer.check,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
