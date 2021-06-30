import Auth from "../../../services/auth";
import { authActionTypes } from "./authActionTypes";

export const authRegister = (data) => async (dispatch) => {};

export const authLogin = (data) => async (dispatch) => {
  await Auth.login(data)
    .then((res) => {
      console.log(res);
      dispatch({ type: authActionTypes.AUTH_LOGIN, payload: true });
    })
    .catch((err) => console.log(err));
};
