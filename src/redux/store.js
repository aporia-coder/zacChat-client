import { createStore, compose } from "redux";
import dataReducer from "./reducers/dataReducer";

const initialState = {};

/*
[
  {topic: {user: zac, msg: 'hello'}, 
]

*/

const store = createStore(
  dataReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
