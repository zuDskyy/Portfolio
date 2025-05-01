import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Learn MongoDB', done: false },
    { id: 3, text: 'Learn C#', done: false },
    { id: 4, text: 'Learn PostgresQl', done: false },
    { id: 5, text: 'Learn Nodejs', done: false }],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, done: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.done = !todo.done;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;