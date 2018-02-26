import React from 'react';
import {func} from 'prop-types';
import EmailResults from './EmailResults';
import EmailTextInput from './EmailTextInput';
import {email} from '../types';
import { Button, Form, } from 'reactstrap';
import { validateEmail, validateEmails } from '../utils/validation';


const EmailForm = ({email, onSaveClick, onChange}) => {

  const isFromValid = !!email.from && validateEmail(email.from);
  const isToValid = !!email.to && validateEmails(email.to);
  const isCcValid = !!email.cc && validateEmails(email.cc);
  const isBccValid = !!email.bcc && validateEmails(email.bcc);

  const isSubmitValid = isFromValid &&
    email.to.length > 0 && isToValid &&
    (email.cc.length === 0 || isCcValid) &&
    (email.bcc.length === 0 || isBccValid) &&
    email.subject &&
    email.content;

  return (
    <div className="content container">
      <h2>Email</h2>

      <Form>
        <EmailTextInput
          name="from"
          value={email.from}
          type={"text"}
          description={"Sender's email"}
          onChange={onChange}
          isValid={isFromValid}
        />
        <EmailTextInput
          name="to"
          value={email.to.join(',')}
          type={"text"}
          description={"Receiver's email, separated by ,"}
          onChange={onChange}
          isValid={isToValid}
        />
        <EmailTextInput
          name="cc"
          value={email.cc.join(',')}
          type={"text"}
          description={"(Optional) CC's email, separated by ,"}
          onChange={onChange}
          isValid={isCcValid}
        />
        <EmailTextInput
          name="bcc"
          value={email.bcc.join(',')}
          type={"text"}
          description={"(Optional) Bcc's email, separated by ,"}
          onChange={onChange}
          isValid={isBccValid}
        />
        <EmailTextInput
          name="subject"
          value={email.subject}
          type={"text"}
          onChange={onChange}
          isValid={true}
        />
        <EmailTextInput
          name="content"
          value={email.content}
          type={"textarea"}
          onChange={onChange}
          isValid={true}
        />


        <Button className="submit" onClick={onSaveClick} disabled={!isSubmitValid}>Submit</Button>
      </Form>

      <br/>

      <EmailResults email={email}/>

    </div>
  );
};

EmailForm.propTypes = {
  onChange: func.isRequired,
  onSaveClick: func.isRequired,
  email: email.isRequired
};

export default EmailForm;
