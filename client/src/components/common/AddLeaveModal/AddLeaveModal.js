import React, { useEffect } from "react";
import { Grid, Button, InputLabel } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

import ModalField from "../Material_ui/ModalField/index";
import InputField from "../Material_ui/InputField";
import SelectField from "../Material_ui/SelectField";

import { initialValues } from "../../../constant/initial_values";
import { validationSchema } from "../../../constant/validation_schema";
import { LEAVE_TYPE } from "../../../constant/app_constant";
import { addLeave } from "../../../store/actions/leave";

const AddLeaveModal = ({
  showLeaveModal,
  setShowLeaveModal,
  employeeNames,
}) => {
  const dispatch = useDispatch();
  const leaveState = useSelector((state) => state.leave);

  const onFormSubmit = (data) => {
    const packet = {
      type: data.type,
      date: data.date,
      reason: data.reason,
      employee_id: data.employee_id,
    };
    dispatch(addLeave(packet));
  };

  useEffect(() => {
    if (!leaveState.loading && leaveState?.addLeave?.data?.status) {
      setShowLeaveModal(false);
    }
  }, [leaveState, leaveState.addLeave]);

  return (
    <ModalField
      showModal={showLeaveModal}
      toggleModal={setShowLeaveModal}
      style="leaveModal"
    >
      <div className="leave-heading">
        <span className="head-section">Apply for leave</span>
        <CloseIcon
          onClick={() => setShowLeaveModal(false)}
          className="modal_cross"
        />
      </div>
      <div className="leave-body">
        <Formik
          initialValues={initialValues.addLeave}
          validationSchema={validationSchema.addLeave}
          onSubmit={onFormSubmit}
        >
          {({ values, errors, touched }) => {
            return (
              <Form>
                <Grid container direction="row">
                  <Grid item lg={6} sm={12} xs={12} className="input-margin">
                    <InputLabel
                      className={
                        errors?.type && touched?.type
                          ? "error-color form-label"
                          : "light-color form-label"
                      }
                    >
                      Leave Type
                    </InputLabel>
                    <SelectField
                      errors={errors.type}
                      touched={touched.type}
                      options={LEAVE_TYPE}
                      name="type"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg={6} sm={12} xs={12}>
                    <InputLabel
                      className={
                        errors?.date && touched?.date
                          ? "error-color form-label"
                          : "light-color form-label"
                      }
                    >
                      Leave Date
                    </InputLabel>
                    <InputField
                      type="date"
                      fullWidth
                      defaultValue={values?.date}
                      name="date"
                      placeholder="Enter date"
                      styles="inputs"
                      errors={errors?.date}
                      touched={touched?.date}
                    />
                  </Grid>
                </Grid>

                <InputLabel
                  className={
                    errors?.reason && touched?.reason
                      ? "error-color form-label"
                      : "light-color form-label"
                  }
                >
                  Add Reason
                </InputLabel>
                <InputField
                  type="text"
                  fullWidth
                  defaultValue={values?.reason}
                  name="reason"
                  placeholder="Enter reason for your leave"
                  styles="inputs"
                  errors={errors?.reason}
                  touched={touched?.reason}
                  multiline={true}
                  rows={3}
                />
                <InputLabel
                  className={
                    errors?.employee_id && touched?.employee_id
                      ? "error-color form-label"
                      : "light-color form-label"
                  }
                >
                  Employe Name
                </InputLabel>
                <SelectField
                  errors={errors.employee_id}
                  touched={touched.employee_id}
                  options={employeeNames}
                  name="employee_id"
                  fullWidth
                />
                <br />
                <br />
                <Button type="submit" color="secondary" variant="contained">
                  {leaveState.loading ? (
                    <CircularProgress color="primary" className="loader-size" />
                  ) : (
                    "Add Leave"
                  )}
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalField>
  );
};

export default AddLeaveModal;
