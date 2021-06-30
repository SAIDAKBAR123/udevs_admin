import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;
