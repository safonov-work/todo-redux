import { FC } from 'react';
import { InputProps } from './input.props';
import styles from "./input.module.scss";


export const Input: FC<InputProps> = ({data, onChange}:InputProps):JSX.Element => {
    return <input  value={data} className={styles.input} onChange={onChange}></input>;
};