import React, { useEffect, useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import moment from "moment";

import ModalField from "../Material_ui/ModalField/index";

import { getLeavesByEmployeeId } from "../../../store/actions/leave";

const AddLeaveModal = ({
  showLeaveModal,
  setShowLeaveModal,
  employee,
  isSalaryView,
}) => {
  const dispatch = useDispatch();
  const leaveState = useSelector((state) => state.leave);
  const [leaves, setLeaves] = useState([]);
  const [month, setmonth] = useState(null);
  const [earnedSalary, setEarnedSalary] = useState(0);

  const handleChange = async (event) => {
    setmonth(event.target.value);
    const filters = await leaves.filter(
      (leave) => Number(leave?.date.split("-")[1]) == event.target.value
    );
    if (filters) {
      let total_leaves = 0;
      await filters.map((leave) => {
        if (leave.type === "full") total_leaves = total_leaves + 1;
        else if (leave.type === "half") total_leaves = total_leaves + 0.5;
      });
      const earned_salary =
        (Number(employee?.salary) * (30 - total_leaves)) / 30;
      setEarnedSalary(earned_salary);
      console.log("earned_salary", earned_salary);
    }
  };

  useEffect(() => {
    if (employee?._id) dispatch(getLeavesByEmployeeId(employee?._id));
  }, [employee]);

  useEffect(() => {
    if (leaveState?.leaves?.data?.leave) {
      setLeaves(leaveState.leaves.data.leave);
    }
  }, [leaveState, leaveState?.leaves]);

  useEffect(() => {
    if (!showLeaveModal) {
      setmonth(null);
      setEarnedSalary(0);
    }
  }, [showLeaveModal]);

  return (
    <ModalField
      showModal={showLeaveModal}
      toggleModal={setShowLeaveModal}
      style="leaveModal"
    >
      <div className="leave-heading">
        <span className="head-section">Leave Details</span>
        <CloseIcon
          onClick={() => setShowLeaveModal(false)}
          className="modal_cross"
        />
      </div>
      <div className="leave-body">
        <Grid container direction="row">
          {!isSalaryView ? (
            <Grid item lg={6} sm={12} xs={12}>
              <div className="employee-info-title">Leave Details</div>
              <br />
              <div className="leaves-container">
                {leaveState.loading && (
                  <div className="loader123">
                    <CircularProgress color="secondary" />
                  </div>
                )}
                {!leaveState.loading && leaves && leaves.length > 0
                  ? leaves.map((leave) => (
                      <ul>
                        <li>
                          <b>Type: </b>
                          {leave?.type}
                        </li>
                        <li>
                          <b>Date: </b>
                          {moment(leave?.date).format("D MMM, yyyy")}
                        </li>
                        <li>
                          <b>Reason: </b>
                          {leave?.reason}
                        </li>
                      </ul>
                    ))
                  : !leaveState.loading && <h3>No leaves record found ...</h3>}
              </div>
            </Grid>
          ) : (
            <Grid item lg={6} sm={12} xs={12}>
              <div className="employee-info-title">Salary Details</div>
              <br />
              {leaveState.loading && (
                <div className="loader123">
                  <CircularProgress color="secondary" />
                </div>
              )}{" "}
              {!leaveState.loading && (
                <FormControl fullWidth>
                  <InputLabel>Select Month</InputLabel>
                  <Select
                    value={month}
                    placeholder="select month"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>January</MenuItem>
                    <MenuItem value={2}>February</MenuItem>
                    <MenuItem value={3}>March</MenuItem>
                    <MenuItem value={4}>April</MenuItem>
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>June</MenuItem>
                    <MenuItem value={7}>July</MenuItem>
                    <MenuItem value={8}>August</MenuItem>
                    <MenuItem value={9}>September</MenuItem>
                    <MenuItem value={10}>October</MenuItem>
                    <MenuItem value={11}>November</MenuItem>
                    <MenuItem value={12}>December</MenuItem>
                  </Select>
                </FormControl>
              )}
              <br />
              <br />
              {!leaveState.loading && earnedSalary > 0 && month && (
                <div className="earned-salary">
                  Earned Salary:{" "}
                  <span className="salary-view">
                    ₹ {earnedSalary.toFixed(2)}
                  </span>
                </div>
              )}
            </Grid>
          )}
          <Grid item lg={6} sm={12} xs={12}>
            <div className="employee-info">
              <div className="employee-info-title">Employee Info</div>
              <div className="employee-details">
                <b>Name</b>
                <div>
                  {employee?.fname} {employee?.lname}
                </div>
              </div>
              <div className="employee-details">
                <b>Email</b>
                <div>{employee?.email}</div>
              </div>
              <div className="employee-details">
                <b>Actual salary</b>
                <div>₹ {employee?.salary}</div>
              </div>
              <div className="employee-details total-leave">
                <section>
                  <div>Total Leaves(Full)</div>
                  <div>Total Leaves(Half)</div>
                </section>
                <section>
                  <div>
                    {leaves.filter((leave) => leave.type === "full").length}
                  </div>
                  <div>
                    {leaves.filter((leave) => leave.type === "half").length}
                  </div>
                </section>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </ModalField>
  );
};

export default AddLeaveModal;
