import { FC } from 'react';
import { todoListItemProps } from './todoListItem.props';
import styles from "./todoListItem.module.scss";

export const TodoListItem: FC<todoListItemProps> = ({createDate,isDone,todoContent,todoName}: todoListItemProps):JSX.Element => {
    return <li className={styles.todoItem}>
        {isDone && <input type='checkbox'></input>}
        <div className={styles.container}>
            <span>{todoName}</span>
            <span>{todoContent}</span>
        </div>
        <span>{createDate}</span>
        <button>X</button>
    </li>;
};