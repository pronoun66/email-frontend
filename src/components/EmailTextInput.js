import React from 'react';
import PropTypes from 'prop-types';

import { FormGroup, Input, Label, FormFeedback, FormText } from 'reactstrap';


const EmailTextInput = ({name, value, type, placeholder, description, onChange, isValid}) => {

  const inputProps = {
    name,
    type,
    placeholder,
    value,
    onChange,
  };


  if (value) {
    inputProps.valid = isValid;
  }

  const input = (<Input className="input" {...inputProps}/>);

  return (
    <FormGroup>
      <Label htmlFor={name}>{name.toUpperCase()}</Label>
      {
        input
      }
      <FormFeedback>Invalid email(s)</FormFeedback>

      {
        description && <FormText>{description}</FormText>
      }

    </FormGroup>
  );
};

const { string, number, func, oneOfType, bool } = PropTypes;

EmailTextInput.propTypes = {
  name: string.isRequired,
  placeholder: string,
  type: string,
  value: oneOfType([
    string,
    number
  ]),
  onChange: func.isRequired,
  description: string,
  isValid: bool
};

export default EmailTextInput;
