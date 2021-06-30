import { authActionTypes } from "../actions/authActions/authActionTypes";

const initialState = {
  userRegister: {},
  userLogin: false,
  userLogout: false,
};

const authReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.types) {
    case authActionTypes.AUTH_REGISTER:
      return {
        ...state,
        userRegister: payload,
      };
    case authActionTypes.AUTH_LOGIN:
      return {
        ...state,
        userLogin: payload,
      };
    case authActionTypes.AUTH_LOGOUT:
      return {
        ...state,
        userLogout: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
