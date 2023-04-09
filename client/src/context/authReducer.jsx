const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          userData: null,
          loading: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
            userData: action.payload,
            loading: false,
            error: false,
        };
      case "LOGIN_FAILURE":
        return {
          userData: null,
          loading: false,
          error: true,
        };       
      default:
        return state
    }
}
export default AuthReducer;