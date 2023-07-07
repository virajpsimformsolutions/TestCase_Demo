import {useAppDispatch, useAppSelector} from '../../../app/redux/useStoreHooks';

describe('useAppDispatch', () => {
  test('returns a function', () => {
    const dispatch = useAppDispatch();
    expect(typeof dispatch).toBe('function');
  });
});

describe('useAppSelector', () => {
  test('returns the correct value from the state', () => {
    const state = {
      loading: false,
      todoList: [{id: 1, content: 'Hit the gym'}],
      error: false,
      success: false
    };
    const selectedState = useAppSelector((state) => state.Todo.todoList);

    expect(selectedState).toBe(state.todoList);
  });
});
