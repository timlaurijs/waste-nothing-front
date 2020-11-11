import axios from "axios";
import { apiUrl } from "../../config/constants";

export default function fetchAllItemsByCityName(queryType, query) {
  console.log(queryType, query);
  return async (dispatch, getState) => {
    try {
      if (getState().items.length) {
        dispatch(resetItems());
      }
      const data = await axios.get(`${apiUrl}/items/${queryType}/${query}`);
      dispatch(setItems(data.data));
    } catch (e) {
      console.log(e, "<===== error");
    }
  };
}

export function setItems(data) {
  return {
    type: "SET_ITEMS",
    payload: data,
  };
}

export function resetItems() {
  return {
    type: "RESET_ITEMS",
  };
}
