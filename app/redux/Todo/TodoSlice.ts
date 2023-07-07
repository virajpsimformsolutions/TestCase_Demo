import {createSlice} from '@reduxjs/toolkit';
import {TodoData} from './types';

// Define the initial state using that type
const initialState: TodoData = {
  loading: false,
  todoList: [{id: 1, title: 'Hit the gym', done: false}],
  error: false,
  success: false
};

const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  //NOTE: you can add custom actions and perform local state management using reducers
  reducers: {
    addToDo: (state, action) => {
      const newTodoList = {
        id: state?.todoList?.length + 1,
        title: action.payload.newContent,
        done: false
      };
      state?.todoList?.push(newTodoList);
    },
    deleteToDoReducer: (state, action) => {
      state.todoList = state.todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const {todoList} = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    }
  }
});

const {reducer} = todoSlice;

export const {addToDo, deleteToDoReducer, editTodo} = todoSlice.actions;

export default reducer;
