import { DetailedHTMLProps, ReactNode,HTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;   
}