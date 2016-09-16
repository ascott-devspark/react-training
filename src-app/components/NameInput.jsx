import React from 'react';
import Actions from '../actions/Actions';

const NameInput = React.createClass({

  onChange: function(event) {
    Actions.setName(event.target.value);
  },

  render: function() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.onChange}
      />
    );
  }
});

export default NameInput;