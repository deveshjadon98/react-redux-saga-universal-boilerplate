import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import appRoutes from './../../routes/app.js';
// core components
import Header from '../../components/Header/Header.js';
import './AppLayout.scss';

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return (
        <Route
          exact
          name="index"
          path={prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
  </Switch>
);

class AppLayout extends React.Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <div className="app-layout" data-test="app-layout">
          <div className="main-panel" ref="mainPanel" data-test="main-panel">
            <Header />
            <div className="main-panel__pages" data-test="main-panel-pages">
              {switchRoutes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppLayout;
