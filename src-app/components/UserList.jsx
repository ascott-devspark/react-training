import React from 'react';

import App from './App';
import DeleteButton from './DeleteButton';
import FormAlert from './FormAlert';

import Actions from '../actions/Actions.js';

class UserList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  renderUsers() {

    if (this.props.users.length <= 0) {
      return (
        <li> Loading ...</li>
      );
    }

    return this.props.users.map( function(user) {
      return (
        <li key={user.id}>
          {user.id} -- {user.name}
          <DeleteButton userId={user.id} value="Remove" />
        </li>
      );
    });
  }

  render() {
    return (
      <App>
        <FormAlert status={this.props.showMessage} message="User was removed correctly."/>
        <ul>
          {this.renderUsers()}
        </ul>
      </App>
    );
  }
};

UserList.defaultProps = {
  users: []
};

export default UserList;
