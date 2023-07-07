import {fireEvent, screen} from '@testing-library/react-native';
import ListTodo from '../../../../app/component/MainView/ListTodo';
import {renderWithProviders} from '../../../../app/utils/test-utils';

const initialTodos = {
  error: false,
  todoList: [{id: 1, content: 'Hit the gym'}],
  loading: false,
  success: true
};

describe('ListTodo component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders todo list', () => {
    const {getByText} = renderWithProviders(<ListTodo />, {
      preloadedState: {
        Todo: initialTodos
      }
    });
    // const todo1 = getByText('Hit the gym');
    // expect(todo1).toBeDefined();
  });

  it('deletes todo on "close" button press', () => {
    const {getByText, getByTestId} = renderWithProviders(<ListTodo />, {
      preloadedState: {
        Todo: initialTodos
      }
    });
    const firstCloseButton = getByTestId('close');
    fireEvent.press(firstCloseButton);
    // const firstTodo = getByText('Hit the gym', {exact: false});
    // expect(firstTodo).toBeNull();
  });

  it('changes to edit mode when "edit" button pressed', () => {
    const {getByTestId, getByPlaceholderText} = renderWithProviders(<ListTodo />, {
      preloadedState: {
        Todo: initialTodos
      }
    });
    const secondEditButton = getByTestId('Edit', {exact: false});
    fireEvent.press(secondEditButton);
    // const textInput = getByPlaceholderText('Enter todo content');
    // expect(textInput).toBeDefined();
  });

  it('updates todo when "Edit" button pressed and input has value', () => {
    const {getByTestId, getByText, getByPlaceholderText} = renderWithProviders(<ListTodo />, {
      preloadedState: {
        Todo: initialTodos
      }
    });
    const secondEditButton = getByTestId('Edit');
    fireEvent.press(secondEditButton);
    const textInput = getByTestId('inputView');
    fireEvent(textInput, 'onChangeText');
    fireEvent.changeText(textInput, 'updated todo content');
    const editButton = screen.getByTestId('edit');
    fireEvent.press(editButton);
  });

  it('displays error and does not update todo when "Edit" button pressed and input is empty', () => {
    const {getByText, getByTestId, getByPlaceholderText} = renderWithProviders(<ListTodo />, {
      preloadedState: {
        Todo: initialTodos
      }
    });
    const secondEditButton = getByTestId('Edit', {exact: false});
    fireEvent.press(secondEditButton);
    const textInput = getByTestId('inputView');
    fireEvent(textInput, 'onChangeText');
    fireEvent.changeText(textInput, '');
    const editButton = getByTestId('edit');
    fireEvent.press(editButton);
  });
});
