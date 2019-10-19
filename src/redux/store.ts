import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const store = createStore(
  combineReducers({
    ...reducers
  }),
  composeWithDevTools(applyMiddleware())
);

export default store;
