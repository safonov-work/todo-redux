import { FC } from 'react';
import styles from "./todoList.module.scss";
import { TodoListItem } from '../todoListItem/todoListItem';
import {useSelector} from "react-redux";

export const TodoList: FC = () => {
    const todos = useSelector(state => state.todos.todos);
    console.log(todos)

    return <ul className={styles.todoList}>
        {todos.map(item => {
          return  <TodoListItem
            key={item.id}
            isDone={item.compiled}
            todoContent={item.text}
            createDate='123'
            todoName={item.text}
            ></TodoListItem>
        })}
    </ul>;
};