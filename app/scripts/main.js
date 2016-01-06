import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

window.$ = require('jquery');

import App from './containers/App'

import MainHeader from './components/MainHeader'
import IndexPage from './containers/IndexPage'
import Page1 from './containers/Page1'

render(
  <div className="wrapper">

    <MainHeader />

    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
          </div>
          <div className="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#">
              <i className="fa fa-circle text-success"></i>
              Online
            </a>
          </div>
        </div>

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

    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Page Header
          <small>Optional description</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-dashboard"></i>
              Level
            </a>
          </li>
          <li className="active">Here</li>
        </ol>
      </section>

      <section className="content">

        <Router history={createBrowserHistory()}>
          <Route path="/" component={App}>
            <IndexRoute component={IndexPage}/>
            <Route path="users" component={Page1}/>
            <Route path="*" component={Page1}/>
          </Route>
        </Router>

      </section>
    </div>

    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        Anything you want
      </div>
      <strong>Copyright &copy; 2015<a href="#">Company</a>.
      </strong>
      All rights reserved.
    </footer>

    <aside className="control-sidebar control-sidebar-dark">
      <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
        <li className="active">
          <a href="#control-sidebar-home-tab" data-toggle="tab">
            <i className="fa fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#control-sidebar-settings-tab" data-toggle="tab">
            <i className="fa fa-gears"></i>
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="control-sidebar-home-tab">
          <h3 className="control-sidebar-heading">Recent Activity</h3>
          <ul className="control-sidebar-menu">
            <li>
              <a href="javascript::;">
                <i className="menu-icon fa fa-birthday-cake bg-red"></i>

                <div className="menu-info">
                  <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                    <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
          </ul>

          <h3 className="control-sidebar-heading">Tasks Progress</h3>
          <ul className="control-sidebar-menu">
            <li>
              <a href="javascript::;">
                <h4 className="control-sidebar-subheading">
                  Custom Template Design
                  <span className="label label-danger pull-right">70%</span>
                </h4>

                <div className="progress progress-xxs">
                  <div className="progress-bar progress-bar-danger" style={ {width: "70%"} }></div>
                </div>
              </a>
            </li>
          </ul>

        </div>

        <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>

        <div className="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 className="control-sidebar-heading">General Settings</h3>

            <div className="form-group">
              <label className="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" className="pull-right" defaultChecked/>
              </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
          </form>
        </div>
      </div>
    </aside>

    <div className="control-sidebar-bg"></div>
  </div>
  , document.getElementById('app')
);
