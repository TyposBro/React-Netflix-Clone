import { AUTH } from "utils/context_enum";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH.LOGIN.START:
      return { user: null, isFetching: true, error: false };
    case AUTH.LOGIN.SUCCESS:
      return { user: action.payload, isFetching: false, error: false };
    case AUTH.LOGIN.ERROR:
      return { user: null, isFetching: false, error: true };
    case AUTH.REGISTER.START:
      return { user: null, isFetching: true, error: false };
    case AUTH.REGISTER.SUCCESS:
      return { user: action.payload, isFetching: false, error: false };
    case AUTH.REGISTER.ERROR:
      return { user: null, isFetching: false, error: true };
    case AUTH.LOGOUT.START:
      return { user: action.payload, isFetching: true, error: false };
    case AUTH.LOGOUT.SUCCESS:
      return { user: null, isFetching: false, error: false };
    case AUTH.LOGOUT.ERROR:
      return { user: action.payload, isFetching: false, error: true };
    default:
      return { ...state };
  }
};

export default authReducer;
