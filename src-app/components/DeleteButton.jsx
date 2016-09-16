import React from 'react';
import { Link } from 'react-router';

import Actions from '../actions/Actions';

const DeleteButton = React.createClass({

  fireDelete: function(ev) {
    Actions.deleteUser(this.props.userId);
    ev.preventDefault();
  },

  render: function() {
    return (
      <Link className="button-delete" to="#" onClick={this.fireDelete}>{ this.props.value }</Link>
    );
  }
});

export default DeleteButton;
