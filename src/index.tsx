import './App.css';
import './index.css';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import { ThemeProvider } from '@material-ui/core/styles';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store from 'store';
import store from './Redux/store';
import { privateRouteMap, publicRouteMap, adminRouteMap } from './routes';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import AdminRoute from './routes/AdminRoute';
import customTheme from './theme';

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={(
            <CircularProgress
              className="loading"
              disableShrink
              color="inherit"
            />
          )}
        >
          <Switch>
            {
              /* we cannot use dynamic key value here, dynamic 'key' will cause the app to
                re-render as key changes its value. To avoid that, we are here using static value
                */
              _.map(publicRouteMap, (route) => (
                <PublicRoute
                  key="publicRouter"
                  exact
                  path={route.path}
                  component={route.component}
                />
              ))
            }
            {_.map(privateRouteMap, (route) => (
              <PrivateRoute
                key="privateRouter"
                exact
                path={route.path}
                component={route.component}
              />
            ))}
            {_.map(adminRouteMap, (route) => (
              <AdminRoute
                key="adminRouter"
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
document.body.classList.add('site-set');
