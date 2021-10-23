import React from "react";
import { Grid, Button, InputLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import InputField from "../common/Material_ui/InputField";

import { initialValues } from "../../constant/initial_values";
import { validationSchema } from "../../constant/validation_schema";
import { addEmployee } from "../../store/actions/employee";
import { ROUTES } from "../../constant/routes";

const AddEmployee = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (data) => {
    const packet = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      salary: data.salary,
    };
    dispatch(addEmployee(packet));
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item lg={8} sm={11} xs={11}>
            <Link to={ROUTES.DASHBOARD} className="back-icon">
              <ArrowBackIcon />
              &nbsp; Go Back
            </Link>
            <br />
            <h1>Add New Employee</h1>
            <br />
            <Formik
              initialValues={initialValues.addEmployee}
              validationSchema={validationSchema.addEmployee}
              onSubmit={onFormSubmit}
            >
              {({ values, errors, touched }) => {
                return (
                  <Form>
                    <Grid container direction="row">
                      <Grid
                        item
                        lg={6}
                        sm={12}
                        xs={12}
                        className="input-margin"
                      >
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
                      </Grid>
                      <Grid item lg={6} sm={12} xs={12}>
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
                      </Grid>
                    </Grid>

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
                        errors?.salary && touched?.salary
                          ? "error-color form-label"
                          : "light-color form-label"
                      }
                    >
                      Salary
                    </InputLabel>
                    <InputField
                      type="text"
                      fullWidth
                      defaultValue={values?.salary}
                      name="salary"
                      placeholder="Enter salary"
                      styles="inputs"
                      errors={errors?.salary}
                      touched={touched?.salary}
                    />
                    <Button type="submit" color="secondary" variant="contained">
                      Add Employee
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AddEmployee;
