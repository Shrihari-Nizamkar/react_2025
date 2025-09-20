import { todoReducer } from "./todoReducer";
import { combineReducers, createStore } from "redux";

export const rootReducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(rootReducer);
