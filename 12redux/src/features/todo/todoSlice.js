// nanoid is a small, secure, URL-friendly, unique string ID generator for JavaScript. It's used by Redux Toolkit to generate unique IDs for todo items.
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Create a slice
// A slice is a collection of Redux reducer logic and actions for a single feature in your application.
// A slice is created using the createSlice function. This function takes an object with three fields:
// name: A string that is used as the prefix for the action types generated by the slice.
// initialState: The initial state value for the slice.
// reducers: An object that contains reducer functions to handle the actions defined in the slice.

const initialState = {
  todos: [{ id: 1, text: "Hello" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState, //we have created a inital state in line11 and then just using it here we could've declare directly here as well
  reducers: {
    //   here we get access to the state and action as arguments
    //   we can use the state to read the current state of the initialState
    //   we can use the action to read the payload of the action
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        //   payload in itself is object
        text: action.payload,
        // here we have just created todo but we have to push it in state as well
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // state.todos = array of todos
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
      });
    },
  },
});
// Here we are exporting individual functionalities of the slice because we update our state using these functionalities
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// here we are exporting the reducer of the slice so that we can use it in our store
export default todoSlice.reducer;
