import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const rootReducers = combineReducers({
  ...reducers
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware()));

export default store;
export type AppState = ReturnType<typeof rootReducers>;
