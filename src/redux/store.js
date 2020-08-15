import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

export const initialState = {
  General: [
    {
      from: "Zac",
      msg: "Welcome to the General channel!",
    },
  ],
  Philosophy: [
    {
      from: "Zac",
      msg: "Welcome to the Philosophy channel!",
    },
  ],
  Technology: [
    {
      from: "Zac",
      msg: "Welcome to the Technology channel!",
    },
  ],
  Music: [
    {
      from: "Zac",
      msg: "Welcome to the Music channel!",
    },
  ],
};

export const store = createStore(
  dataReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
