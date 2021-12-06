import { createContext, useReducer, useEffect } from "react";
import authReducer from "./AuthReducers";
import getLocalUser from "utils/getLocalUser";

const INITIAL_STATE = {
  user: getLocalUser(),
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    console.log("stringify:", state.user);
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
