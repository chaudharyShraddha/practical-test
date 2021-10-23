import * as yup from "yup";

export const validationSchema = {
  signup: yup.object().shape({
    fname: yup.string().required("first name is required"),
    lname: yup.string().required("last name is required."),
    email: yup
      .string()
      .email("Please enter your valid email address")
      .required("email is required."),
    password: yup.string().min(6).max(12).required("password is required."),
  }),
  login: yup.object().shape({
    email: yup.string().email().required("email is required."),
    password: yup.string().min(6).max(12).required("password is required."),
  }),
  addEmployee: yup.object().shape({
    fname: yup.string().required("first name is required"),
    lname: yup.string().required("last name is required."),
    email: yup
      .string()
      .email("Please enter your valid email address")
      .required("email is required."),
    salary: yup.number().required("salary is required."),
  }),
  addLeave: yup.object().shape({
    type: yup.string().required("leave type is required"),
    date: yup.date().required("date is required."),
    reason: yup.string().required("reason is required."),
    employee_id: yup.string().required("emplyee name is required."),
  }),
};
