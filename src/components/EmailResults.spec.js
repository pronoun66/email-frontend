import React from 'react';
import { shallow } from 'enzyme';
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

describe('<EmailResults />', () => {
  it('should not display when email is not sent', () => {
    const email = getEmail({
      isEmailSent: false,
    });

    const wrapper = shallow(<EmailResults email={email}/>);
    expect(wrapper.equals(<div />)).toEqual(true);
  });

  it('should display when email is sent successfully', () => {
    const email = getEmail({
      isEmailSent: true,
      hasEmailSentError: true,
    });

    const wrapper = shallow(<EmailResults email={email}/>);
    expect(wrapper.find('.alert').prop('color')).toEqual('danger');
  });

  it('should display when email is sent successfully', () => {
    const email = getEmail({
      isEmailSent: true,
      hasEmailSentError: false,
    });

    const wrapper = shallow(<EmailResults email={email}/>);
    expect(wrapper.find('.alert').prop('color')).toEqual('success');
  });
});
