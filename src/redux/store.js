import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";
import userReducer from "./reducers/userReducer";

const initialState = {};

const reducer = combineReducers({
  user: userReducer,
  data: dataReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
