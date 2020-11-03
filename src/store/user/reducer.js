import { LOGIN_SUCCESS } from "./actions";
const initialState = {
  token: localStorage.getItem("token"),
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
