import {
  LOGIN_SUCCESS,
  LOG_OUT,
  TOKEN_STILL_VALID,
  EDIT_PROFILE_SUCCESS,
} from "./actions";
const initialState = {
  token: localStorage.getItem("token"),
  firstName: null,
  lastName: null,
  phoneNumber: null,
  city: null,
  country: null,
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

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case EDIT_PROFILE_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
