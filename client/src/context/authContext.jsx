import { createContext, useReducer , useEffect} from "react";
import AuthReducer from "./authReducer";

const INITIAL_STATE = {
  userData: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.userData))
  },[state.userData])
  
  return (
    <AuthContext.Provider
      value={{
        userData: state.userData,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};