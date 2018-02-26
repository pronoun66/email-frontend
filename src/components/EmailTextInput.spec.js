import React from 'react';
import { shallow } from 'enzyme';
import EmailTextInput from './EmailTextInput';

describe('<EmailTextInput />', () => {
  it('should have an input element', () => {
    const props = {
      name: 'testName',
      placeholder: 'Type Here',
      value: 'user@gmail.com',
      onChange: jest.fn()
    };

    const wrapper = shallow(<EmailTextInput {...props} />);
    expect(wrapper.find('.input').length).toEqual(1);
  });

  // Example of testing the value of a prop
  it('should apply placeholder', () => {
    const props = {
      name: 'test',
      placeholder: 'Type Here',
      value: 'user@gmail.com',
      onChange: jest.fn()
    };

    const wrapper = shallow(<EmailTextInput {...props} />);
    const placeholder = wrapper.find('.input').first().prop('placeholder');
    expect(placeholder).toEqual('Type Here');
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    const props = {
      name: 'test',
      placeholder: 'Type Here',
      value: 'user@gmail.com',
      onChange: onChange
    };

    const changeEvent = { target: { name: 'from', value: 'user@gmail.com' } };
    const wrapper = shallow(<EmailTextInput {...props} />);

    expect(onChange).not.toBeCalled();
    wrapper.find('.input').first().simulate('change', changeEvent);
    expect(onChange).toBeCalledWith(changeEvent);
  });

  it('should show valid input', () => {
    const props = {
      name: 'test',
      placeholder: 'Type Here',
      value: 'user@gmail.com',
      onChange: jest.fn(),
      isValid: true,
    };

    const wrapper = shallow(<EmailTextInput {...props} />);
    const isValid = wrapper.find('.input').first().prop('valid');
    expect(isValid).toEqual(true);
  });
});
