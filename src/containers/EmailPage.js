import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/emailActions';
import EmailForm from '../components/EmailForm';

export class EmailPage extends React.Component {
  sendEmail = () => {
    this.props.actions.sendEmail(this.props.email);
  }

  changeFieldValue = (e) => {
    this.props.actions.changeFieldValue(e.target.name, e.target.value);
  }

  render() {
    return (
      <EmailForm
        email={this.props.email}
        onSaveClick={this.sendEmail}
        onChange={this.changeFieldValue}
      />
    );
  }
}

EmailPage.propTypes = {
  actions: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    email: state.email
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailPage);
