import * as types from '../constants/actionTypes';
import { serverUrl } from '../config/config.json';
import fetch from 'isomorphic-fetch';


export function sendEmail(email) {
  return ((dispatch) => {
    return fetch(`${serverUrl}/email`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(email),
    })
      .then((res) => {
        if (res.status === 200) {
          return Promise.resolve();
        } else {
          return res.json()
            .then((json) => Promise.reject(json));
        }
      })
      .then(() => {
        dispatch({
          type: types.SEND_EMAIL,
          isEmailSent: true,
          hasEmailSentError: false,
        })
      })
      .catch(e => {
        console.error(e); // eslint-disable-line
        dispatch({
          type: types.SEND_EMAIL,
          isEmailSent: true,
          hasEmailSentError: true
        })
      })

  });
}

export function changeFieldValue(fieldName, value) {
  if (fieldName === 'to' ||
    fieldName === 'cc' ||
    fieldName === 'bcc') {
    value = value.split(/,\s*/);

    if (value.length === 1) {
      if (!value[0]) {
        value = [];
      }
    }
  }

  return (dispatch) => {
    return dispatch({
      type: types.CHANGE_EMAIL_FIELD,
      fieldName,
      value,
    })
  }
}
