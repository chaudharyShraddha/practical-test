import * as types from "../constants/employee";

const initialState = {
  addEmployee: { data: null, error: null },
  employees: { data: null, error: null },
  loading: false,
};

// EMPLOYEE REDUCER
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EMPLOYEE_LOADING:
      return { ...state, loading: action.payload };

    case types.ADD_EMPLOYEE_SUCCESS:
      return { ...state, addEmployee: { data: action.payload, error: null } };
    case types.ADD_EMPLOYEE_FAILURE:
      return { ...state, addEmployee: { data: null, error: action.payload } };

    case types.GET_ALL_EMPLOYEES_SUCCESS:
      return { ...state, employees: { data: action.payload, error: null } };
    case types.GET_ALL_EMPLOYEES_FAILURE:
      return { ...state, employees: { data: null, error: action.payload } };

    default:
      return state;
  }
};
export default employeeReducer;
