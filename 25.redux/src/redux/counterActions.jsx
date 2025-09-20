//Action Types

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

//Action Creators
export const increment = () => ({ type: INCREMENT }); //When WE call increment(), it returns an action object.
export const decrement = () => ({ type: DECREMENT }); //// Output: { type: DECREMENT }
export const reset = () => ({ type: RESET });
