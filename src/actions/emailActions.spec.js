import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './emailActions';

describe('Actions', () => {
  const appState = {
    from: '',
    to: [],
    cc: [],
    bcc: [],
    subject: '',
    content: '',
    isEmailSent: false,
    hasEmailSentError: false,
  };

  it('should create an action to send email', () => {
    const dispatch = jest.fn();

    expect(typeof (ActionCreators.sendEmail(appState))).toEqual('function');
    ActionCreators.sendEmail(appState)(dispatch);
  });

  it('should create an action to change field', () => {
    const dispatch = jest.fn();

    const expected = {
      type: ActionTypes.CHANGE_EMAIL_FIELD,
      fieldName: "from",
      value: "user@gmail.com"
    };

    expect(typeof (ActionCreators.changeFieldValue(appState))).toEqual('function');
    ActionCreators.changeFieldValue("from", "user@gmail.com")(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });
});
