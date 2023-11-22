import { configureStore } from '@reduxjs/toolkit';
import { goodsApi } from './api/goodsApi';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
