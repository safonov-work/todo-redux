import { FC } from 'react';
import styles from "./addTodo.module.scss";
import { Input } from '../ui/input/input';
import {useState} from "react";
import { Button } from '../ui/button/button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

export const AddTodo: FC = ():JSX.Element => {
    const [inputValue, setinputValue ] = useState<string>("");
    const dispatch = useDispatch(); 
    const handleChange = (e: string): void => { 
        setinputValue(e);
    } 
    
    const addAndRemoveTodo = () => {
        dispatch(addTodo(inputValue));
        setinputValue("")
    }

    return <div className={styles.addTodo}>
        <Input data={inputValue} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}></Input>
        <Button onClick={addAndRemoveTodo}>add</Button>
    </div>;
};