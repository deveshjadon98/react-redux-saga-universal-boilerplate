import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header data-test="component-header">
        header
      </header>
    );
  }
}

export default withRouter(Header);
