import * as AuthActionCreators from "./authActions/authActions";

// here we combine all actions from all the files and export them

export default {
  ...AuthActionCreators,
};
