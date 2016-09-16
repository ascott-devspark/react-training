import React from 'react'

import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <aside>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/users/create">New User</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/links">Links</Link></li>
        </ul>
      </aside>
    );
  }
});
