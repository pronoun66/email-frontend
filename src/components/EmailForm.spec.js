import React from 'react';
import { shallow } from 'enzyme';
import EmailForm from './EmailForm';
import EmailTextInput from './EmailTextInput';
import EmailResults from './EmailResults';

function getEmail(args) {
  const email = {
    from: 'from@gmail.com',
    to: ['to@gmail.com'],
    cc: [],
    bcc: [],
    subject: 'subject',
    content: 'content',
  };

  return {
    ...email,
    ...args
  };
}

describe('<EmailForm />', () => {
  it('should contain <EmailTextInput /> components', () => {
    const email = getEmail();
    const wrapper = shallow(<EmailForm
      onChange={jest.fn()}
      onSaveClick={jest.fn()}
      email={email}
    />);
    const allInputs = wrapper.find(EmailTextInput);

    expect(allInputs.length).toEqual(6);
    expect(allInputs.at(0).props().name).toEqual('from');
    expect(allInputs.at(0).props().value).toEqual(email.from);
    expect(allInputs.at(1).props().name).toEqual('to');
    expect(allInputs.at(1).props().value).toEqual(email.to.join(','));
    expect(allInputs.at(2).props().name).toEqual('cc*');
    expect(allInputs.at(2).props().value).toEqual(email.cc.join(','));
    expect(allInputs.at(3).props().name).toEqual('bcc*');
    expect(allInputs.at(3).props().value).toEqual(email.bcc.join(','));
    expect(allInputs.at(4).props().name).toEqual('subject');
    expect(allInputs.at(4).props().value).toEqual(email.subject);
    expect(allInputs.at(5).props().name).toEqual('content');
    expect(allInputs.at(5).props().value).toEqual(email.content);
  });

  it('should contain <EmailResults /> components', () => {
    const email = getEmail();
    const wrapper = shallow(<EmailForm
      onChange={jest.fn()}
      onSaveClick={jest.fn()}
      email={email}
    />);
    const expected = <EmailResults email={email} />;

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should handle sendEmail button click', () => {
    const onChange = jest.fn();
    const onSaveClick = jest.fn();
    const wrapper = shallow(<EmailForm
      onChange={onChange}
      onSaveClick={onSaveClick}
      email={getEmail({

      })}
    />);

    expect(onSaveClick).not.toBeCalled();
    wrapper.find('.submit').simulate('click');
    expect(onSaveClick).toBeCalled();
  });


  it('should call onChange when text input changes', () => {
    const onChange = jest.fn();

    const wrapper = shallow(<EmailForm
      onSaveClick={jest.fn()}
      onChange={onChange}
      email={getEmail()}
    />);

    const changeEvent = { target: { name: 'from', value: 'user@gmail.com' } };

    expect(onChange).not.toBeCalled();
    wrapper.find(EmailTextInput).first().simulate('change', changeEvent);
    expect(onChange).toBeCalledWith(changeEvent);
  });
});
