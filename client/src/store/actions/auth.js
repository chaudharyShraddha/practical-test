import * as types from "../constants/auth";
import { loginUser, registerUser } from "../../api_calls/auth";
import { toast } from "react-toastify";
import { history } from "../../components/common/History/History";
import { ROUTES } from "../../constant/routes";

// export const authStatusSuccess = (data) => ({
//   type: types.AUTH_STATUS,
//   payload: data,
// });

export const setLoginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});
export const setLoginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const setRegisterSuccess = (data) => ({
  type: types.REGISTER_SUCCESS,
  payload: data,
});
export const setRegisterFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const loadingAuthState = (status) => ({
  type: types.AUTH_LOADING,
  payload: status,
});

// const setLogout = (data) => ({ type: types.LOGOUT, payload: data });

export const login = (params) => (dispatch) => {
  dispatch(loadingAuthState(true));
  loginUser(params)
    .then((res) => {
      dispatch(setLoginSuccess(res.data));
      localStorage.setItem("token", res.data.token);
      history.push(ROUTES.DASHBOARD);
      toast.success(res.data.message);
      dispatch(loadingAuthState(false));
    })
    .catch((err) => {
      dispatch(
        setLoginFailure(err?.response?.data || { error_message: err.message })
      );
      toast.error(err?.response?.data.error_message);
      dispatch(loadingAuthState(false));
    });
};

export const register = (params) => (dispatch) => {
  dispatch(loadingAuthState(true));
  registerUser(params)
    .then((res) => {
      dispatch(setRegisterSuccess(res.data));
      history.push(ROUTES.LOGIN);
      toast.success(res.data.message);
      dispatch(loadingAuthState(false));
    })
    .catch((err) => {
      dispatch(
        setRegisterFailure(
          err?.response?.data || { error_message: err.message }
        )
      );
      toast.error(err?.response?.data.error_message);
      dispatch(loadingAuthState(false));
    });
};

// export const AuthStatus = () => (dispatch) => {
//   dispatch(setLoading(true));
//   authStatus()
//     .then((res) => {
//       dispatch(authStatusSuccess(res.data));
//       localStorage.setItem("user", JSON.stringify(res.data.results.user));
//       dispatch(setLoading(false));
//     })
//     .catch((err) => {
//       dispatch(
//         setLoginFailure(err?.response?.data || { error_message: err.message })
//       );
//       dispatch(setLoading(false));
//     });
// };

// export const logoutAction = () => (dispatch) => {
//   dispatch(setLoading(true));
//   logout()
//     .then(() => {
//       dispatch(setLogout({}));
//       dispatch(setLoading(false));
//       localStorage.clear();
//     })
//     .catch((err) => {
//       dispatch(
//         setLogout(err?.response?.data || { error_message: err.message })
//       );
//       dispatch(setLoading(false));
//     });
// };
