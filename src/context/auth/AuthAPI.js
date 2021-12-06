import axios from "utils/axios";
import {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerError,
  registerSuccess,
  logoutStart,
  logoutSuccess,
  logoutError,
} from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const { data } = await axios.post("/auth/login", user);
    dispatch(loginSuccess(data));
    return true;
  } catch (error) {
    dispatch(loginError);
    return false;
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart);
  try {
    const { data } = await axios.post("/auth/register", user);
    dispatch(registerSuccess(data));
    return true;
  } catch (error) {
    dispatch(registerError());
    return false;
  }
};

export const logout = (dispatch) => {
  dispatch(logoutStart());
  try {
    localStorage.removeItem("user");
  } catch (error) {
    dispatch(logoutError());
    return false;
  }

  dispatch(logoutSuccess());
  return true;
};
