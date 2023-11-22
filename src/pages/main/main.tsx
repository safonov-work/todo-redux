import { FC } from 'react';
import styles from './main.module.scss';
import { AddTodo } from '../../components/addTodo/addTodo';
import { TodoList } from '../../components/todoList/todoList';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hook';
import { fetchTodos } from '../../store/thunks/thunks';
import { useEffect } from 'react';

export const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <AddTodo></AddTodo>

      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occerd: {error}</h2>}
      <TodoList></TodoList>
    </div>
  );
};
