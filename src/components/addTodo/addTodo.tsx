import { FC } from 'react';
import styles from './addTodo.module.scss';
import { Input } from '../ui/input/input';
import { useState } from 'react';
import { Button } from '../ui/button/button';
import { useAppDispatch } from '../../store/hooks/hook';
import { addNewTodo } from '../../store/thunks/thunks';
import { useAddProductMutation } from '../../store/api/goodsApi';

export const AddTodo: FC = (): JSX.Element => {
  const [inputValue, setinputValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const [addProduct, { isError }] = useAddProductMutation();

  const handleAddProduct = async () => {
    if (inputValue) {
      await addProduct({ title: inputValue }).unwrap();
    }
    setinputValue('');
  };

  const handleChange = (e: string): void => {
    setinputValue(e);
  };

  // const addAndRemoveTodo = () => {
  //   dispatch(addNewTodo(inputValue));
  // };

  return (
    <div className={styles.addTodo}>
      <Input
        data={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(e.target.value)
        }
      ></Input>
      <Button onClick={handleAddProduct}>add</Button>
    </div>
  );
};
