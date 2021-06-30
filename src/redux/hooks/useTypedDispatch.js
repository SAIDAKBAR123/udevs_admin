import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../actions";

export const useTypedDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
