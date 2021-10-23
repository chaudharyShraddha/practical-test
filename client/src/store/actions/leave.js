import * as types from "../constants/leave";
import { addLeaveData, getLeavesData } from "../../api_calls/leave";
import { toast } from "react-toastify";

export const addLeaveSuccess = (data) => ({
  type: types.ADD_LEAVE_SUCCESS,
  payload: data,
});
export const addLeaveFailure = (error) => ({
  type: types.ADD_LEAVE_FAILURE,
  payload: error,
});

export const getLeavesByEmpIdSuccess = (data) => ({
  type: types.GET_LEAVES_BY_EMPLOYEE_ID_SUCCESS,
  payload: data,
});
export const getLeavesByEmpIdFailure = (error) => ({
  type: types.GET_LEAVES_BY_EMPLOYEE_ID_FAILURE,
  payload: error,
});

export const loadingLeaveState = (status) => ({
  type: types.LEAVE_LOADING,
  payload: status,
});

export const addLeave = (params) => (dispatch) => {
  dispatch(loadingLeaveState(true));
  addLeaveData(params)
    .then((res) => {
      dispatch(addLeaveSuccess(res.data));
      toast.success(res.data.message);
      dispatch(loadingLeaveState(false));
    })
    .catch((err) => {
      dispatch(
        addLeaveFailure(err?.response?.data || { error_message: err.message })
      );
      toast.error(err?.response?.data.error_message);
      dispatch(loadingLeaveState(false));
    });
};

export const getLeavesByEmployeeId = (employee_id, params) => (dispatch) => {
  dispatch(loadingLeaveState(true));
  getLeavesData(employee_id, params)
    .then((res) => {
      dispatch(getLeavesByEmpIdSuccess(res.data));
      dispatch(loadingLeaveState(false));
    })
    .catch((err) => {
      dispatch(
        getLeavesByEmpIdFailure(
          err?.response?.data || { error_message: err.message }
        )
      );
      toast.error(err?.response?.data.error_message);
      dispatch(loadingLeaveState(false));
    });
};
