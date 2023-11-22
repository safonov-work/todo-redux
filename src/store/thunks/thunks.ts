import { createAsyncThunk } from '@reduxjs/toolkit';
import { addTodo, removeTodo, toggleTodo } from '../todoSlice';
import { CreatedTodo } from '../interfaces/todoInterface';

// на получение

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=20'
      );
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// на удаление

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('No delete task.Server error.');
      }
      dispatch(removeTodo(id));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// на изменение чекбокса

export const toggleTodos = createAsyncThunk(
  'todos/toggleTodos',
  async (id: string, { rejectWithValue, dispatch, getState }) => {
    const todo = getState().todos.list.find((todo) => todo.id === id);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('No delete task.Server error.');
      }
      dispatch(toggleTodo({ id }));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// на добавление

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (text: string, { rejectWithValue, dispatch }) => {
    try {
      const todo: CreatedTodo = {
        title: text,
        userId: 1,
        completed: false,
      };

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(todo),
        }
      );

      if (!response.ok) {
        throw new Error('No delete task.Server error.');
      }
      const data = await response.json();
      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
