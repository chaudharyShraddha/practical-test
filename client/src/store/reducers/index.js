import { combineReducers } from "redux";

import authReducer from "./auth";
import employeeReducer from "./employee";
import leaveReducer from "./leave";

// COMBINED REDUCERS
const reducers = {
  auth: authReducer,
  employee: employeeReducer,
  leave: leaveReducer
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
