import React from 'react';

import Actions from '../actions/Actions';

const SubmitButton = React.createClass({

  fireSubmit: function() {
    Actions.submitForm();
  },

  render: function() {
    return (
      <button onClick={this.fireSubmit}>
        {this.props.value}
      </button>
    );
  }
});

export default SubmitButton;
