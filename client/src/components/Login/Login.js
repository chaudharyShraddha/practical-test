import React from "react";
import { Grid, InputLabel, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import InputField from "../common/Material_ui/InputField";

import { initialValues } from "../../constant/initial_values";
import { validationSchema } from "../../constant/validation_schema";
import { login } from "../../store/actions/auth";
import { ROUTES } from "../../constant/routes";

const Login = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (data) => {
    const packet = {
      email: data.email,
      password: data.password,
    };
    dispatch(login(packet));
  };

  return (
    <div className="container">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item lg={6} sm={12} xs={12}>
          <h1>Login</h1>
          <br/><br/>
          <Formik
            initialValues={initialValues.login}
            validationSchema={validationSchema.login}
            onSubmit={onFormSubmit}
          >
            {({ values, errors, touched }) => {
              return (
                <Form>
                  <InputLabel
                    className={
                      errors?.email && touched?.email
                        ? "error-color form-label"
                        : "light-color form-label"
                    }
                  >
                    Email
                  </InputLabel>
                  <InputField
                    type="email"
                    fullWidth
                    defaultValue={values?.email}
                    name="email"
                    placeholder="Enter email"
                    styles="inputs"
                    errors={errors?.email}
                    touched={touched?.email}
                  />
                  <InputLabel
                    className={
                      errors?.password && touched?.password
                        ? "error-color form-label"
                        : "light-color form-label"
                    }
                  >
                    Password
                  </InputLabel>
                  <InputField
                    type="password"
                    fullWidth
                    defaultValue={values?.password}
                    name="password"
                    placeholder="Enter password"
                    styles="inputs"
                    errors={errors?.password}
                    touched={touched?.password}
                  />
                  <InputLabel>
                    Don't have an account.{" "}
                    <Link to={ROUTES.SIGNUP}>click here</Link>
                  </InputLabel>
                  <br />
                  <Button type="submit" color="secondary" variant="contained">
                    Login
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
