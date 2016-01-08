import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'

class MainFooter extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          Anything you want
        </div>
        <strong>Copyright &copy; 2015<a href="#">Company</a>.
        </strong>
        All rights reserved.
      </footer>
    );
  }
}

export default MainFooter;
