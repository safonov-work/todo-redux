export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoState {
  list: Todo[];
  errors?: null | string;
  status?: null | string;
  error?: null;
}

export interface CreatedTodo {
  title: string;
  userId: number;
  completed: boolean;
}
