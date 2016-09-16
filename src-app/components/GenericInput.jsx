import React from 'react';

const GenericInput = React.createClass({

  render: function() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
});

export default GenericInput;
