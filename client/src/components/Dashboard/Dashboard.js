import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PaymentIcon from "@material-ui/icons/Payment";

import Navbar from "../Navbar/Navbar";
import AddLeaveModal from "../common/AddLeaveModal/AddLeaveModal";
import ShowLeavesModal from "../common/ShowLeavesModal/ShowLeavesModal";

import { getAllEmployees } from "../../store/actions/employee";
import { ROUTES } from "../../constant/routes";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const employeeState = useSelector((state) => state.employee);
  const [employees, setEmployees] = useState(null);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showLeaveByEmpModal, setShowLeaveByEmpModal] = useState(false);
  const [employeeNames, setEmployeeNames] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [isSalaryView, setSalaryView] = useState(false);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  useEffect(() => {
    if (employeeState?.employees?.data?.employees) {
      setEmployees(employeeState.employees.data.employees);
    }
  }, [employeeState, employeeState?.employees]);

  useEffect(() => {
    const employeeArray = [];
    if (employees) {
      employees.map((employee) =>
        employeeArray.push({
          name: `${employee.fname} ${employee.lname}`,
          value: employee._id,
        })
      );
      setEmployeeNames(employeeArray);
    }
  }, [employees]);

  useEffect(() => {
    if (!showLeaveByEmpModal) {
      setEmployee(null);
    }
  }, [showLeaveByEmpModal]);

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
          <Grid item lg={10} sm={11} xs={11}>
            {employeeState.loading && (
              <div className="loader">
                <CircularProgress color="secondary" />
              </div>
            )}
            <div className="dashboard-section">
              <h2>Dashboard</h2>
              <div>
                {employees && employees.length > 0 && (
                  <Button
                    type="button"
                    color="secondary"
                    variant="contained"
                    onClick={() => setShowLeaveModal(true)}
                  >
                    Create Leave
                  </Button>
                )}
                &nbsp;
                <Button
                  type="button"
                  color="primary"
                  variant="contained"
                  onClick={() => history.push(ROUTES.ADD_EMPLOYEE)}
                >
                  Create new employee
                </Button>
              </div>
            </div>
            <br />
            <br />
            {!employeeState.loading && employees && employees.length > 0 ? (
              <TableContainer>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow className="table-header">
                      <TableCell className="table-cell">First Name</TableCell>
                      <TableCell className="table-cell">Last Name</TableCell>
                      <TableCell className="table-cell">Email</TableCell>
                      <TableCell className="table-cell">
                        Actual Salary
                      </TableCell>
                      <TableCell className="table-cell">Total Leave</TableCell>
                      <TableCell className="table-cell">Earnings</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee?._id}>
                        <TableCell>{employee?.fname}</TableCell>
                        <TableCell>{employee?.lname}</TableCell>
                        <TableCell>{employee?.email}</TableCell>
                        <TableCell>₹ {employee?.salary}/-</TableCell>
                        <TableCell>
                          <VisibilityIcon
                            className="modal_cross"
                            onClick={() => {
                              setShowLeaveByEmpModal(true);
                              setEmployee(employee);
                              setSalaryView(false);
                            }}
                          />
                        </TableCell>
                        <TableCell>
                          <PaymentIcon
                            className="modal_cross"
                            onClick={() => {
                              setShowLeaveByEmpModal(true);
                              setEmployee(employee);
                              setSalaryView(true);
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              !employeeState.loading && <h3>No employees found ...</h3>
            )}
          </Grid>
        </Grid>
      </div>

      <AddLeaveModal
        showLeaveModal={showLeaveModal}
        setShowLeaveModal={setShowLeaveModal}
        employeeNames={employeeNames}
      />
      <ShowLeavesModal
        showLeaveModal={showLeaveByEmpModal}
        setShowLeaveModal={setShowLeaveByEmpModal}
        employee={employee}
        isSalaryView={isSalaryView}
      />
    </>
  );
};

export default Dashboard;
