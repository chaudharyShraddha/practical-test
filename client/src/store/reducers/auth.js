import * as types from "../constants/auth";

const initialState = {
  signup: { data: null, error: null },
  login: { data: null, error: null },
  loading: false,
};

// AUTH REDUCER
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOADING:
      return { ...state, loading: action.payload };

    case types.REGISTER_SUCCESS:
      return { ...state, signup: { data: action.payload, error: null } };
    case types.REGISTER_FAILURE:
      return { ...state, signup: { data: null, error: action.payload } };

    case types.LOGIN_SUCCESS:
      return { ...state, login: { data: action.payload, error: null } };
    case types.LOGIN_FAILURE:
      return { ...state, login: { data: null, error: action.payload } };

    default:
      return state;
  }
};
export default authReducer;
