import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  anime: reducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = legacy_createStore(rootReducer, enhancer);
