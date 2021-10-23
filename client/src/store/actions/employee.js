import * as types from "../constants/employee";
import { addEmployeeData, getAllEmployeesData } from "../../api_calls/employee";
import { toast } from "react-toastify";
import { history } from "../../components/common/History/History";
import { ROUTES } from "../../constant/routes";

export const addEmployeeSuccess = (data) => ({
  type: types.ADD_EMPLOYEE_SUCCESS,
  payload: data,
});
export const addEmployeeFailure = (error) => ({
  type: types.ADD_EMPLOYEE_FAILURE,
  payload: error,
});

export const getAllEmployeesSuccess = (data) => ({
  type: types.GET_ALL_EMPLOYEES_SUCCESS,
  payload: data,
});
export const getAllEmployeesFailure = (error) => ({
  type: types.GET_ALL_EMPLOYEES_FAILURE,
  payload: error,
});

export const loadingEmployeeState = (status) => ({
  type: types.EMPLOYEE_LOADING,
  payload: status,
});

export const addEmployee = (params) => (dispatch) => {
  dispatch(loadingEmployeeState(true));
  addEmployeeData(params)
    .then((res) => {
      dispatch(addEmployeeSuccess(res.data));
      toast.success(res.data.message);
      history.push(ROUTES.DASHBOARD);
      dispatch(loadingEmployeeState(false));
    })
    .catch((err) => {
      dispatch(
        addEmployeeFailure(
          err?.response?.data || { error_message: err.message }
        )
      );
      toast.error(err?.response?.data.error_message);
      dispatch(loadingEmployeeState(false));
    });
};

export const getAllEmployees = (params) => (dispatch) => {
  dispatch(loadingEmployeeState(true));
  getAllEmployeesData(params)
    .then((res) => {
      dispatch(getAllEmployeesSuccess(res.data));
      dispatch(loadingEmployeeState(false));
    })
    .catch((err) => {
      dispatch(
        getAllEmployeesFailure(
          err?.response?.data || { error_message: err.message }
        )
      );
      toast.error(err?.response?.data.error_message);
      dispatch(loadingEmployeeState(false));
    });
};
