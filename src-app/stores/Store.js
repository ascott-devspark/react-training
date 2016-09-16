import alt from '../alt.js';

import Actions from '../actions/Actions.js';
import axios from 'axios';

class Store {
  constructor() {
    console.log('STORE: store created');
    this.bindListeners({
      getUserList: Actions.GET_USER_LIST,
      setUsers: Actions.SET_USERS,
      deleteUser: Actions.DELETE_USER
    });

    this.state = {
      userList: [],
      showMessage: false,
    };
  }

  getUserList(message) {
    console.log('STORE: getting user list');

    const _this = this;
    _this.setState({
      showMessage: false
    });

    axios
      .get('http://localhost:3033/users')
      .then((response) => {
        if (message) {
            console.log('STORE: set message in store')
            _this.setState({
              showMessage: message
            });
        }
        Actions.setUsers(response.data);
      });
  }

  setUsers(data) {
    this.setState({
      userList: data
    });
  }

  deleteUser(data) {
    console.log('STORE: Delete User ' + data);

    const _this = this;

    axios
      .delete('http://localhost:3033/users/' + data)
      .then((response) => {
          console.log('User ' + response.data.deleting + ' has been removed');
          _this.getUserList(true);
      });
  }
}

Store.displayName = 'Store';

export default alt.createStore(Store);
