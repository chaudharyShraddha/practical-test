import * as types from "../constants/leave";

const initialState = {
  addLeave: { data: null, error: null },
  leaves: { data: null, error: null },
  loading: false,
};

// LEAVE REDUCER
const leaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LEAVE_LOADING:
      return { ...state, loading: action.payload };

    case types.ADD_LEAVE_SUCCESS:
      return { ...state, addLeave: { data: action.payload, error: null } };
    case types.ADD_LEAVE_FAILURE:
      return { ...state, addLeave: { data: null, error: action.payload } };

    case types.GET_LEAVES_BY_EMPLOYEE_ID_SUCCESS:
      return { ...state, leaves: { data: action.payload, error: null } };
    case types.GET_LEAVES_BY_EMPLOYEE_ID_FAILURE:
      return { ...state, leaves: { data: null, error: action.payload } };

    default:
      return state;
  }
};
export default leaveReducer;
