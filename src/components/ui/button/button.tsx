import { FC } from 'react';
import styles from "./button.module.scss";
import { ButtonProps } from './button.props';


export const Button: FC<ButtonProps> = ({children, onClick}: ButtonProps):JSX.Element => {
    return <button className={styles.button} onClick={onClick}>{children}</button>;
};