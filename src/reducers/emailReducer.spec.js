import * as ActionTypes from '../constants/actionTypes';
import reducer from './emailReducer';

describe('Reducers::Email', () => {
  const getInitialState = () => {
    return {
      from: '',
      to: [],
      cc: [],
      bcc: [],
      subject: '',
      content: '',
      isEmailSent: false,
      hasEmailSentError: false,
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SEND_EMAIL', () => {
    const action = { type: ActionTypes.SEND_EMAIL, isEmailSent: true,  hasEmailSentError: true};
    const expected = {...getInitialState(), isEmailSent: true,  hasEmailSentError: true};

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });

  it('should handle CHANGE_EMAIL_FIELD', () => {
    const action = { type: ActionTypes.CHANGE_EMAIL_FIELD, fieldName: "from", value: "user@gmail.com"};
    const expected = {...getInitialState(), from: "user@gmail.com"};

    expect(reducer(getInitialState(), action)).toEqual(expected);
  });
});
