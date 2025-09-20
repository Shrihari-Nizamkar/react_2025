import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter", //The name is used as a prefix in those action type strings.  createSlice automatically generates action types like: "counter/increment" ,"counter/decrement", "counter/reset"

  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; //reducers in slice don’t return manually, but behind the scenes they return a new updated state thanks to Immer.
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions; //These are action creators generated automatically by createSlice.

export default counterSlice.reducer;
//This is the actual reducer function created by the slice.
// we’ll plug this into  Redux store so it knows how to handle "counter/increment", "counter/decrement", "counter/reset" actions.
