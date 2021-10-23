import React from "react";
import { Grid, InputLabel, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import InputField from "../common/Material_ui/InputField";

import { initialValues } from "../../constant/initial_values";
import { validationSchema } from "../../constant/validation_schema";
import { register } from "../../store/actions/auth";
import { ROUTES } from "../../constant/routes";

const Signup = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (data) => {
    const packet = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: data.password,
    };
    dispatch(register(packet));
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
          <h1>Signup</h1>
          <br/>
          <Formik
            initialValues={initialValues.signup}
            validationSchema={validationSchema.signup}
            onSubmit={onFormSubmit}
          >
            {({ values, errors, touched }) => {
              return (
                <Form>
                  <InputLabel
                    className={
                      errors?.fname && touched?.fname
                        ? "error-color form-label"
                        : "light-color form-label"
                    }
                  >
                    Frist Name
                  </InputLabel>
                  <InputField
                    type="fname"
                    fullWidth
                    defaultValue={values?.fname}
                    name="fname"
                    placeholder="Enter First name"
                    styles="inputs"
                    errors={errors?.fname}
                    touched={touched?.fname}
                  />
                  <InputLabel
                    className={
                      errors?.lname && touched?.lname
                        ? "error-color form-label"
                        : "light-color form-label"
                    }
                  >
                    Last Name
                  </InputLabel>
                  <InputField
                    type="lname"
                    fullWidth
                    defaultValue={values?.lname}
                    name="lname"
                    placeholder="Enter last name"
                    styles="inputs"
                    errors={errors?.lname}
                    touched={touched?.lname}
                  />
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
                    Do have an account.{" "}
                    <Link to={ROUTES.LOGIN}>Login here</Link>
                  </InputLabel>
                  <br />
                  <Button type="submit" color="secondary" variant="contained">
                    Signup
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

export default Signup;
