import React from 'react';
import {shallow} from 'enzyme';
import App,{Section} from './App';

describe('App', () => {
  it('should render the main component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('SafeAreaView')).toHaveLength(1);
  });

  it('should have a section with title "Step One"', () => {
    const wrapper = shallow(<App />);
    const section = wrapper.find(Section).first();
    expect(section.props().title).toEqual('Step One');
  });

  it('should have a section with title "See Your Changes"', () => {
    const wrapper = shallow(<App />);
    const section = wrapper.find(Section).at(1);
    expect(section.props().title).toEqual('See Your Changes');
  });

  it('should have a section with title "Debug"', () => {
    const wrapper = shallow(<App />);
    const section = wrapper.find(Section).at(2);
    expect(section.props().title).toEqual('Debug');
  });

  it('should have a section with title "Learn More"', () => {
    const wrapper = shallow(<App />);
    const section = wrapper.find(Section).at(3);
    expect(section.props().title).toEqual('Learn More');
  });
});

describe('Section', () => {
  it('should render section title and description', () => {
    const props = {
      title: 'Test Section',
    };
    const wrapper = shallow(
      <Section title={props.title}>
        <p>Test children</p>
      </Section>,
    );
    expect(wrapper.find('Text').at(0).text()).toEqual(props.title);
    expect(wrapper.find('Text').at(1).children().text()).toEqual('Test children');
  });
});