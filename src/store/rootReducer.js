import { combineReducers } from "redux";
import user from "./user/reducer";
import items from "./items/reducer";

export default combineReducers({
  user,
  items,
});
