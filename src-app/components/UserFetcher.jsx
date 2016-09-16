import React from 'react';
import axios from 'axios';

import Store from '../stores/Store';
import Actions from '../actions/Actions';

import UserList from './UserList';

class UserFetcher extends React.Component {

  constructor(props) {
    super(props);

    this.state = Store.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

    Store.listen(this.onChange);
    Actions.getUserList();
  }

  componentWillUnmount() {
    Store.unlisten(this.onChange);
  }

  onChange() {
    this.setState(Store.getState());
  }

  render() {
    return (
      <UserList users={this.state.userList} showMessage={this.state.showMessage} />
    );
  }
};

export default UserFetcher;
