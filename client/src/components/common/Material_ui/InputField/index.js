import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";

const index = ({
  placeholder,
  rows,
  multiline,
  type,
  fullWidth,
  name,
  label,
  styles,
  InputLabelProps,
  margin,
  defaultValue,
  inputProps,
  errors,
  touched,
  validate,
}) => (
  <Field
    as={TextField}
    type={type}
    variant="outlined"
    fullWidth={fullWidth}
    label={label}
    name={name}
    className={styles || ""}
    helperText={<ErrorMessage className="error_message" name={name} />}
    InputLabelProps={InputLabelProps ? InputLabelProps : ""}
    margin={margin}
    value={defaultValue}
    inputProps={inputProps || ""}
    rows={rows}
    multiline={multiline || false}
    placeholder={placeholder}
    error={touched && errors && errors}
    validate={validate}
  />
);

export default index;
