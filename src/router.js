import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DateTable from './routes/DateTable'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/calendar" exact component={DateTable} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
