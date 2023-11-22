import { FC, useState } from 'react';
import styles from './todoList.module.scss';
import { TodoListItem } from '../todoListItem/todoListItem';
import { useAppSelector } from '../../store/hooks/hook';
import { useGetGoodsQuery } from '../../store/api/goodsApi';

export const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const [count, setCount] = useState<string>('');
  const { data = [] } = useGetGoodsQuery(count);

  return (
    <div>
      <select value={count} onChange={(e) => setCount(e.target.value)}>
        <option value="">all</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>

      <ul className={styles.todoList}>
        {data.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              isDone={item.completed}
              title={item.title}
              createDate="123"
              todoName={item.title}
              itemID={item.id}
            ></TodoListItem>
          );
        })}
      </ul>
    </div>
  );
};
