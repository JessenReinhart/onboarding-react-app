import { combineReducers } from "redux";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "SIGN_OUT":
      return false;
    default:
      return state;
  }
};

const accountReducer = (
  state = {
    username: ""
  },
  action
) => {
  switch (action.type) {
    case "SIGNED_IN":
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  logged: loggedReducer,
  account: accountReducer
});

export default allReducers;
