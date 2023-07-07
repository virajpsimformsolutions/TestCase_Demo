export type TodoItem = {
  id: number;
  title: string;
  done: boolean;
};

export type TodoData = {
  error: boolean;
  todoList: TodoItem[];
  loading: boolean;
  success: boolean;
};
