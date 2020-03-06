import { createStore } from "redux";
import { reducer } from './reducer.js';

export const store = createStore(
  reducer,  //this has initial state
  // This below is just redux middleware for dev
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);