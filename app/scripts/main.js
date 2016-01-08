import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

window.$ = window.jQuery = require('jquery');
require('./utils/admin_lte/app');

import App from './containers/App'

import MainHeader from './components/MainHeader'
import MainSidebar from './components/MainSidebar'
import MainFooter from './components/MainFooter'
import ControlSidebar from './components/ControlSidebar'

import IndexPage from './containers/IndexPage'
import Page1 from './containers/Page1'

render(
  <div className="wrapper">

    <MainHeader />
    <MainSidebar />

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

    <MainFooter />
    <ControlSidebar />

    <div className="control-sidebar-bg"></div>
  </div>
  , document.getElementById('app')
);
