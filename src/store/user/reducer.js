import { LOGIN_SUCCESS, LOG_OUT } from "./actions";
const initialState = {
  token: localStorage.getItem("token"),
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    default:
      return state;
  }
};
