import { FC } from 'react';
import styles from "./main.module.scss";
import { AddTodo } from '../../components/addTodo/addTodo';
import { TodoList } from '../../components/todoList/todoList';

export const Main: FC = () => {
    return <div className={styles.main}>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
    </div>;
};