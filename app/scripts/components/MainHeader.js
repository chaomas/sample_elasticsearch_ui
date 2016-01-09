import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'

class MainHeader extends React.Component {

  render() {
    return (
      <header className="main-header">

        <Link to="/" className="logo">
          <span className="logo-mini"><b>E</b> UI</span>
          <span className="logo-lg"><b>Elasticserach</b> UI</span>
        </Link>

        <nav className="navbar navbar-static-top" role="navigation">
          <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">

              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default MainHeader;
