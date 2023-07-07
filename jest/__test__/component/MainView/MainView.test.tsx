/* eslint-disable @typescript-eslint/ban-ts-comment */
import {fireEvent, screen} from '@testing-library/react-native';
import MainView from '../../../../app/component/MainView';
import {renderWithProviders} from '../../../../app/utils/test-utils';

import React from 'react';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: jest.fn()
// }));

// Mock state.
// jest.mock('react', () => ({
//   // Returns the actual module instead of a mock,
//   // bypassing all checks on whether the module should receive
//   // a mock implementation or not.
//   ...jest.requireActual('react'),
//   useState: jest.fn()
// }));
const setState = jest.fn();
const initialTodos = {
  error: false,
  todoList: [{id: 1, content: 'Hit the gym'}],
  loading: false,
  success: true
};
describe('ButMainView', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const {getByTestId, toJSON} = renderWithProviders(<MainView />, {
        preloadedState: {
          Todo: initialTodos
        }
      });
      const onClick = jest.fn();
      const addButton = screen.getByTestId('AddButton');
      fireEvent.press(addButton);

      // renderWithProviders(<MainView />);
      // const component = render(<MainView />);
    });
  });

  it('Change Text', () => {
    const {getByTestId, getByText} = renderWithProviders(<MainView />, {
      preloadedState: {
        Todo: initialTodos
      }
    });

    const INPUT_TEXT = '25';
    const inputView = getByTestId('inputView');
    fireEvent(inputView, 'onChangeText');
    fireEvent.changeText(inputView, 'Hello');
    const addButton = screen.getByTestId('AddButton');
    fireEvent.press(addButton);
    // expect(inputView.props.value).toBe('Hello');
  });

  describe('Test Enter', () => {
    // beforeEach(() => {
    //   // @ts-ignore
    //   // Accepts a function that will be used as an implementation of the mock for one call to the mocked function.
    //   // Can be chained so that multiple function calls produce different results.
    //   useStateMock.mockImplementation((init: any) => [init, setState]);
    // });
    // it('should match to snapshot', () => {
    //   const onChangeTest = jest.fn();
    //   const onInputChange = jest.fn();
    //   const initialTodos = [{id: 1, content: 'Hit the gym'}];
    //   const result = renderWithProviders(<MainView />, {
    //     preloadedState: {
    //       Todo: initialTodos
    //     }
    //   });
    //   useStateMock.mockImplementationOnce(() => [true, setState]);
    //   // expect(result.current.count).toBe(0);
    //   // const username = 'chucknorris';
    //   // const {getByText, getByPlaceholderText} = screen;
    //   // fireEvent.changeText(getByPlaceholderText(/username/i), username);
    //   // const {getByTestId} = renderWithProviders(<MainView />, {
    //   //   preloadedState: {
    //   //     Todo: initialTodos
    //   //   }
    //   // });
    //   // const myInput = getByTestId('input');
    //   // expect(myInput.props.value).toEqual('Test Text');
    //   // const input = getByTestId('input');
    //   // value = 'Test Text';
    //   // fireEvent.changeText(input, '123');
    //   // expect(input.props.value).toBe('123');
    // });
  });
});

// describe('Interaction', () => {
//   describe('onPressHandler', () => {
//     test('clicking the button toggles an answer on/off', () => {
//       const onClick = jest.fn();
//       const component = render(<MainView />);
//       const button = component.getByTestId('button');
//       fireEvent.press(button);
//     });
//   });
// });
