import { AUTH } from "utils/context_enum";

export const loginStart = () => {
  return { type: AUTH.LOGIN.START };
};

export const loginSuccess = (user) => {
  return { type: AUTH.LOGIN.SUCCESS, payload: user };
};

export const loginError = () => {
  return { type: AUTH.LOGIN.ERROR };
};

export const logoutStart = () => {
  return { type: AUTH.LOGOUT.START };
};

export const logoutSuccess = () => {
  return { type: AUTH.LOGOUT.SUCCESS, payload: null };
};

export const logoutError = () => {
  return { type: AUTH.LOGOUT.ERROR };
};

export const registerStart = () => {
  return { type: AUTH.REGISTER.START };
};

export const registerSuccess = (user) => {
  return { type: AUTH.REGISTER.SUCCESS, payload: user };
};

export const registerError = () => {
  return { type: AUTH.REGISTER.ERROR };
};
