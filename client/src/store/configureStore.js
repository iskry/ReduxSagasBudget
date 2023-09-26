import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import entriesReducer from "../reducers/entries.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
    }),
    applyMiddleware(thunk)
  );
};

export default configureStore;
