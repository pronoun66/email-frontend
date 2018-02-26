// Centralized propType definitions
import PropTypes from 'prop-types';

const { shape, bool, string, array } = PropTypes;

export const email = shape({
  from: string,
  to: array,
  cc: array,
  bcc: array,
  subject: string,
  content: string,
  isEmailSent: bool,
  hasEmailSentError: bool,
});

