import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface todoListItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  todoName: string;
  isDone: boolean;
  createDate: string;
  title: string;
  itemID: string;
}
