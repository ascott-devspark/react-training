import React from 'react';
import { Link } from 'react-router';

import Header from './Header.jsx';
import Sidebar from './SideBar.jsx';
import Footer from './Footer.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
        {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }

});
