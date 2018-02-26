import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';


const EmailResults = ({email}) => {
  if (!email.isEmailSent) {
    return <div />;
  }

  return (
    <div>
      {
        email.hasEmailSentError ?
        <Alert className="alert" color="danger">
          Email sent failed
        </Alert>
          :
        <Alert className="alert" color="success">
          Email sent successfully
        </Alert>
      }
    </div>
  );
};

EmailResults.propTypes = {
  email: PropTypes.object.isRequired
};

export default EmailResults;
