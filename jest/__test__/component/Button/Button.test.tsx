/* eslint-disable jest/valid-expect */
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import BaseButton from '../../../../app/component/Button/index';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = render(<BaseButton label='test label' />);
      expect(component).toMatchSnapshot();
    });
  });
});

describe('Interaction', () => {
  describe('onPressHandler', () => {
    test('clicking the button toggles an answer on/off', () => {
      const onClick = jest.fn();
      const component = render(<BaseButton onClick={onClick} />);
      const button = component.getByTestId('button');
      fireEvent.press(button);
    });
  });
});
// describe('Button Component', () => {
//   test('TextView Snapshot', () => {
//     const wrapper = shallow(<BaseView />);
//     expect(wrapper.debug()).toMatchSnapshot();
//   });

//   // test('baseView Match Snapshot', () => {
//   //   const wrapper = shallow(<BaseView />);
//   //   const instance = wrapper.instance();
//   //   instance.data();
//   //   // expect(wrapper.exists('baseView')).toEqual(true);
//   //   // expect(wrapper.find('baseView')).exists();
//   // });
// });
