import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'

class MainSidebar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>

          <ul className="sidebar-menu">
            <li className="header">HEADER</li>
            <li className="active">
              <a href="#">
                <i className="fa fa-link"></i>
                <span>Link</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-link"></i>
                <span>Another Link</span>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-link"></i>
                <span>Multilevel</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="#">Link in level 2</a>
                </li>
                <li>
                  <a href="#">Link in level 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

export default MainSidebar;
