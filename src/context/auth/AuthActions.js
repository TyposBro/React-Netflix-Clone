import { AUTH } from "utils/context_enum";

export const loginStart = () => {
  return { type: AUTH.LOGIN.LOGIN_START };
};

export const loginSuccess = (user) => {
  return { type: AUTH.LOGIN.LOGIN_SUCCESS, payload: user };
};

export const loginError = () => {
  return { type: AUTH.LOGIN.LOGIN_ERROR };
};

export const logoutStart = () => {
  return { type: AUTH.LOGOUT.LOGOUT_START };
};

export const logoutSuccess = () => {
  return { type: AUTH.LOGOUT.LOGOUT_SUCCESS, payload: null };
};

export const logoutError = () => {
  return { type: AUTH.LOGOUT.LOGOUT_ERROR };
};

export const registerStart = () => {
  return { type: AUTH.REGISTER.REGISTER_START };
};

export const registerSuccess = (user) => {
  return { type: AUTH.REGISTER.REGISTER_SUCCESS, payload: user };
};

export const registerError = () => {
  return { type: AUTH.REGISTER.REGISTER_ERROR };
};
