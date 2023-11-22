import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from './interfaces/todoInterface';
import { setError } from './errors/errors';
import { fetchTodos, toggleTodos } from './thunks/thunks';
import { deleteTodo } from './thunks/thunks';

const initialState: TodoState = {
  list: [],
  errors: null,
  status: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((i) => i.id !== action.payload);
    },
    toggleTodo(state, action) {
      const toggledTodo = state.list.find((todo) => {
        return todo.id === action.payload.id;
      });
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      (state.status = 'loading'), (state.error = null);
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.list = action.payload;
    });
    builder.addCase(fetchTodos.rejected, setError);
    builder.addCase(deleteTodo.rejected, setError);
    builder.addCase(toggleTodos.rejected, setError);
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
