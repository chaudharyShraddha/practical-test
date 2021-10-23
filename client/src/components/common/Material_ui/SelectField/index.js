import React from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { Field } from "formik";

const index = ({
  errors,
  touched,
  options,
  name,
  inputLabel,
  fullWidth,
  styles,
  defaultValue,
}) => (
  <FormControl
    variant="outlined"
    fullWidth={fullWidth || false}
    className={styles || ""}
  >
    <InputLabel  error={touched && errors && errors}>{inputLabel} </InputLabel>
    <Field as={Select} name={name} value={defaultValue} error={touched && errors && errors}>
      {options &&
        options.map((singleValue) => (
          <MenuItem value={singleValue.value} key={singleValue.value}>
            {" "}
            {singleValue.name}{" "}
          </MenuItem>
        ))}
    </Field>
    <FormHelperText className="error-color"> {errors && touched && errors}</FormHelperText>
  </FormControl>
);

export default index;
