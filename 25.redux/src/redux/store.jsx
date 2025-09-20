import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //The reducer option tells Redux how to update the state when actions are dispatched.
});

// The counterReducer function will handle updates for the counter slice of state.

// In the store, state will look like:

// {
//   counter: {
//     value: 0
//   }
// }
