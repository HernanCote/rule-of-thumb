import App from './../src/components/App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', () => {
  test('Should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1').text()).toBe('React Boilerplate');
    expect(wrapper).toMatchSnapshot;
  });
});
