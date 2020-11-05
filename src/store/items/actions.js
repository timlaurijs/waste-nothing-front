import axios from "axios";

export default function fetchAllItemsByCityName(cityName) {
  return async (dispatch, getState) => {
    try {
      if (getState().items.length) {
        dispatch(resetItems());
      }
      const data = await axios.get(`http://localhost:4000/items/${cityName}`);
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
