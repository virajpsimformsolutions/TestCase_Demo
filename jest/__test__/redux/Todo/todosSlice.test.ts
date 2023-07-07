import reducer, {addToDo, deleteToDo, editTodo} from '../../../../app/redux/Todo/TodoSlice';
import {TodoItem} from '../../../../app/redux/Todo/types';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual({
    error: false,
    loading: false,
    success: false,
    todoList: [{content: 'Hit the gym', id: 1}]
  });
});

test('should handle a todo being added to an empty list', () => {
  const previousState = {
    loading: false,
    todoList: [],
    error: false,
    success: false
  };

  expect(reducer(previousState, addToDo({newContent: 'Run the tests'}))).toEqual({
    error: false,
    loading: false,
    success: false,
    todoList: [{content: 'Run the tests', id: 1}]
  });
});

test('should handle a todo being added to an existing list', () => {
  const previousState = {
    loading: false,
    todoList: [{id: 1, content: 'Hit the gym'}],
    error: false,
    success: false
  };

  expect(reducer(previousState, addToDo('Use Redux'))).toEqual({
    error: false,
    loading: false,
    success: false,
    todoList: [
      {content: 'Hit the gym', id: 1},
      {content: undefined, id: 2}
    ]
  });
});

test('should handle a todo being edit to an existing list', () => {
  const previousState = {
    loading: false,
    todoList: [{id: 1, content: 'Hit the gym'}],
    error: false,
    success: false
  };
  expect(reducer(previousState, editTodo({content: 'AVC', id: 1}))).toEqual({
    error: false,
    loading: false,
    success: false,
    todoList: [{content: 'AVC', id: 1}]
  });
});

test('should handle a todo being edit to an existing list', () => {
  const previousState = {
    loading: false,
    todoList: [{id: 1, content: 'Hit the gym'}],
    error: false,
    success: false
  };
  expect(reducer(previousState, editTodo({content: 'AVC'}))).toEqual({
    error: false,
    loading: false,
    success: false,
    todoList: [{content: 'Hit the gym', id: 1}]
  });
});

test('should handle a todo being edit to an existing list', () => {
  const previousState = {
    loading: false,
    todoList: [{id: 1, content: 'Hit the gym'}],
    error: false,
    success: false
  };
  expect(reducer(previousState, deleteToDo({id: 1}))).toEqual({
    error: false,
    loading: false,
    success: false,
    todoList: []
  });
});
