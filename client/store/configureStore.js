import { createStore, combineReducers } from "redux";
import entriesReducer from "../reducers/entries";

export default () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
    })
  );
};
