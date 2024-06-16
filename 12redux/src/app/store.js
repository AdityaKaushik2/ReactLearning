/*
 * How to configure Redux Store
 * 1. import configureStore from reduxjs/toolkit
 * 2. store configureStore in a variable
 * 3. Create Reducer (slices in Redux Toolkit)
 * 4. Create a slice
 * 5. Create a initialState
 * 6. Create a reducers object
 * 7. Export the slice
 * 8. Export the reducer
 * 9. Import the reducer in store
 * 10. Use the reducer in the store
 * */

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
// It always takes object
export const store = configureStore({
  reducer: todoReducer,
});

// now we can use our state in any component by using useSelector hook
// useSelector is a hook that takes the current state as an argument and returns the selected part of the state.
