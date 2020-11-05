import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken, selectUser } from "./selectors";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_OUT = "LOG_OUT";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});
export const logOut = () => ({ type: LOG_OUT });

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      console.log("response after login,", response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const signUp = (firstName, lastName, email, password, phoneNumber) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      });

      dispatch(loginSuccess(response.data));
      console.log("response after sign in,", response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    try {
      // if we do have a token,
      // check whether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
    }
  };
};
export const editProfileSuccess = (user) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: user,
});

export const editProfile = (
  firstName,
  lastName,
  phoneNumber,
  city,
  country
) => {
  return async (dispatch, getState) => {
    try {
      const { token, id } = selectUser(getState());

      const response = await axios.patch(
        `${apiUrl}/user/${id}`,
        {
          firstName,
          lastName,
          phoneNumber,
          city,
          country,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(editProfileSuccess(response.data));
    } catch (error) {
      console.log("error", error);
    }
  };
};
