import { FC } from 'react';
import { todoListItemProps } from './todoListItem.props';
import styles from './todoListItem.module.scss';
import { useAppDispatch } from '../../store/hooks/hook';
import { toggleTodos } from '../../store/thunks/thunks';
import { useDeleteProductMutation } from '../../store/api/goodsApi';

export const TodoListItem: FC<todoListItemProps> = ({
  createDate,
  isDone,
  title,
  todoName,
  itemID,
}: todoListItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id).unwrap();
  };

  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => {
          dispatch(toggleTodos(itemID));
        }}
      ></input>
      <div className={styles.container}>
        <span>{todoName}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <span>{createDate}</span>
      <button
        onClick={() => {
          handleDeleteProduct(itemID);
        }}
      >
        X
      </button>
    </li>
  );
};
